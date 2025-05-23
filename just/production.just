# Build the production artifact
[group('production commands')]
build:
    #!/usr/bin/env bash
    set +a
    source ".env.production"
    set -a
    just start -d
    docker compose exec astro npm run build

# Build and preview the production artifact [--no-build: bypass build sequence]
[group('production commands')]
preview *FLAGS:
    #!/usr/bin/env bash
    set +a
    source ".env.production"
    set -a
    if [[ "{{ FLAGS }}" != *"--no-build"* ]]; then 
        just build; 
    else
        just start -d
    fi
    docker compose exec astro npm run preview
