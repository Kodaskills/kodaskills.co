# Settings

set dotenv-required := true
set dotenv-load := true
set dotenv-filename := ".env"

# Imports

import "just/git.just"
import 'just/development.just'
import 'just/production.just'

# Output help

alias help := default

default:
    @just --list
