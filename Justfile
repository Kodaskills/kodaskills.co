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

# Build the static site inside the container (output: ./dist)
[group('build')]
build:
    docker compose run --rm dev bun run build

# Preview the production build via nginx → http://localhost:8080
[group('build')]
preview:
    docker build --target production -t kodaskills-preview .
    docker run --rm -p 8080:80 kodaskills-preview

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
