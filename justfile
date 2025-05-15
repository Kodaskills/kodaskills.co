# Settings
set dotenv-required
set dotenv-load := true
set dotenv-filename := ".env"

# Output help
alias help := default
default:
  @just --list

###### UTILS FUNCTIONS

###### DEVELOPMENT

# Start the development environment [-w: watch mode]
[group('development commands')]
start *FLAGS:
    #!/usr/bin/env bash
    cmd="up"
    if [[ "{{ FLAGS }}" == *"-w"* ]]; then cmd="watch"; fi
    docker compose ${cmd}

# Stop the development environment
[group('development commands')]
stop:
    @docker compose down

# Clean the development environment [i=true/false : remove images (default true), v=true/false remove volumes (default true)]
[group('development commands')]
clean i="true" v="true" *rest:
    #!/usr/bin/env bash
    rmi=""
    vol=""
    if [ "{{i}}" = "true" ]; then rmi="--rmi all"; fi
    if [ "{{v}}" = "true" ]; then vol="-v"; fi

    docker compose down ${rmi} ${vol} --remove-orphans {{ rest }}

###### PRODUCTION

# Build the production artifact
[group('production commands')]
build:
    #!/usr/bin/env bash
    set +a
    source ".env.production"
    set -a
    docker compose exec astro npm run build

# Build and preview the production artifact [--no-build: bypass build sequence]
[group('production commands')]
preview *FLAGS:
    #!/usr/bin/env bash
    set +a
    source ".env.production"
    set -a
    if [[ "{{ FLAGS }}" != *"--no-build"* ]]; then just build; fi
    docker compose exec astro npm run preview