# Kodaskills — Docker-based task runner
# Usage: just <recipe>   |   just

default:
    @just --list

# ── Development ────────────────────────────────────────────────────────────────

# Install dependencies inside the container (runs lefthook install via prepare)
[group('dev')]
install:
    docker compose run --rm -e CI=true dev bun install

# Start the dev server with hot reload → http://localhost:4321
[group('dev')]
dev:
    docker compose up dev

# Start the Astrobook component explorer → http://localhost:4322
[group('dev')]
book:
    docker compose up book

# Stop all running containers
[group('dev')]
stop:
    docker compose down

# Restart all running containers or pass only one as arg (dev, book, ...)
[group('dev')]
restart:
    docker compose restart

# Check for outdated dependencies
[group('dev')]
outdated:
    docker compose run --rm dev bun outdated

# Upgrade dependencies (interactive by default, pass "all" to skip prompt)
[group('dev')]
update all='':
    #!/usr/bin/env sh
    before=$(md5 -q bun.lock 2>/dev/null || md5sum bun.lock | cut -d' ' -f1)
    if [ '{{all}}' = 'all' ]; then
      docker compose run --rm -e CI=true dev bun update
    else
      docker compose run --rm dev bun update --interactive
    fi
    after=$(md5 -q bun.lock 2>/dev/null || md5sum bun.lock | cut -d' ' -f1)
    if [ "$before" = "$after" ]; then
      echo 'No updates needed'
    else
      docker compose ps -q dev | grep -q . && docker compose rm -sf dev && docker compose up -d dev || true
    fi

# ── Build & Preview ────────────────────────────────────────────────────────────

# Build the static site or astrobook (target: dev [default] | book)
[group('build')]
[arg('target', pattern='dev|book')]
build target='dev':
    docker compose run --rm {{ target }} bun run build {{ if target == "book" { "--config astro.config.book.ts" } else { "" } }}

# Preview the previously built dist via nginx (target: dev [default] | book) → http://localhost:8080
[group('build')]
[arg('target', pattern='dev|book')]
preview target='dev':
    docker build --target {{ if target == "book" { "book-production" } else { "production" } }} -t kodaskills-{{ target }}-preview .
    docker run --rm -p 8080:80 kodaskills-{{ target }}-preview

# ── Code Quality ───────────────────────────────────────────────────────────────

# Astro: check typescript
[group('quality')]
check *args:
    docker compose run --rm -e CI=false dev astro check {{args}}

# Biome: format and lint with auto-fix
[group('quality')]
lint *args:
    docker compose run --rm dev bun biome check --write {{args}}

# Knip: detect unused exports and dependencies
[group('quality')]
knip *args:
    docker compose run --rm dev bun knip {{args}}

# Validate Branch Name: detect bad branch name
[group('quality')]
check-branch-name *args:
    docker compose run --rm dev bun validate-branch-name {{args}}

# ── i18n / Lingui ──────────────────────────────────────────────────────────────

# Extract translatable strings from source → update .po catalogs
[group('i18n')]
i18n-extract:
    docker compose run --rm dev bun lingui extract --clean

# Compile .po catalogs → compiled .ts message files
[group('i18n')]
i18n-compile:
    docker compose run --rm dev bun lingui compile

# (strict compile — exits non-zero if any msgstr is empty)
[group('i18n')]
i18n-check:
    docker compose run --rm dev bun lingui compile --strict

# Extract newly added strings then immediately compile (workflow shortcut)
[group('i18n')]
i18n-sync: i18n-extract i18n-compile

# Run any command inside the dev container  →  just run bun add lodash
[group('dev')]
run *args:
    docker compose run --rm dev {{args}}

# ── Git ────────────────────────────────────────────────────────────────────────

# Remove all local branches that have been merged into main (pass 'dry' to preview only)
[group('git')]
git-cleanup dry='':
    #!/usr/bin/env bash
    if ! command -v gh &> /dev/null; then
      echo -e '{{BOLD + RED}}Error: GitHub CLI (gh) is required for this recipe.{{NORMAL}}'
      echo 'Install it: https://github.com/cli/cli#installation'
      exit 1
    fi
    git checkout main
    git pull

    main_commit=$(git rev-parse main)
    to_delete=""

    # Get branch names from all merged PRs (works for squash, rebase, and merge)
    merged_pr_branches=$(gh pr list -s merged --limit 100 --json headRefName --jq '.[].headRefName' 2>/dev/null || true)

    # Filter: only delete local branches that match a merged PR name and point to a different commit than main
    for branch in $merged_pr_branches; do
      if git rev-parse --verify "$branch" >/dev/null 2>&1; then
        branch_commit=$(git rev-parse "$branch")
        if [ "$branch_commit" != "$main_commit" ]; then
          to_delete="$to_delete $branch"
        fi
      fi
    done

    if [ -z "$to_delete" ]; then
      echo -e '{{BOLD + GREEN}}✓ No merged branches to clean up{{NORMAL}}'
      exit 0
    fi

    echo -e '{{BOLD + CYAN}}🧹 Branches to delete:{{NORMAL}}'
    for b in $to_delete; do echo -e "  {{MAGENTA}}- $b{{NORMAL}}"; done

    if [ '{{dry}}' != 'dry' ]; then
      for b in $to_delete; do git branch -d "$b" 2>/dev/null || true; done
      echo -e '{{BOLD + GREEN}}✓ Done — merged branches removed{{NORMAL}}'
    else
      echo -e '{{BOLD + YELLOW}}! Dry run — no branches deleted{{NORMAL}}'
    fi

# ── Docker & Cleanup ───────────────────────────────────────────────────────────

# Remove node_modules and dist inside the container
[group('docker')]
reset:
    docker compose rm -sf dev
    docker compose run --rm dev sh -c "rm -rf node_modules dist || true"
    docker compose up -d dev

# Remove all project containers, images and volumes
[group('docker')]
clean:
    docker compose down --rmi all --volumes --remove-orphans
