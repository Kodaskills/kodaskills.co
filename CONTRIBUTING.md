# Contributing to Kodaskills.co

> First off, thank you for considering contributing to Kodaskills.co! It's people like you that make this project valuable for the community.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

Kodaskills.co is an open source project and we love to receive contributions from our community — you! There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests, or writing code which can be incorporated into the project itself.

**Please note:** We don't use the issue tracker for support questions. If you need help, please contact [opensource@kodaskills.co](mailto:opensource@kodaskills.co) or check our documentation.

## Ground Rules

**Responsibilities**

- Ensure cross-platform compatibility (macOS, Linux, Windows with Docker)
- Follow the project's code style (Biome formatting rules)
- Create issues for any major changes and enhancements you wish to make
- Keep feature versions as small as possible, preferably one new feature per version
- Be welcoming to newcomers and encourage diverse new contributors from all backgrounds

See our [Code of Conduct](CODE_OF_CONDUCT.md) for more details.

## Your First Contribution

Unsure where to begin contributing to Kodaskills.co? You can start by looking through these beginner-friendly issues:

- **Good first issues** -- Issues which should only require a few lines of code
- **Help wanted** -- Issues which need more involved contributions

Working on your first Pull Request? You can learn how from this *free* series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first 😸

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [Just](https://github.com/casey/just) (command runner)

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd kodaskills.co

# Install dependencies
just install

# Start development server
just dev
```

The dev server will be available at `http://localhost:4321`.

### Making Changes

1. **Fork** the repository (if you don't have write access)
2. **Create a branch** following the naming convention: `feature/description`, `fix/description`, `chore/description`
3. **Make your changes**
4. **Run checks** before committing:
   ```bash
   just lint        # Format and lint with auto-fix
   just check       # TypeScript checks
   just knip        # Check for unused exports/dependencies
   just i18n-check  # Validate translations
   ```
5. **Commit** using the conventional commit format (interactive prompt will guide you)
6. **Push** and open a Pull Request

### Tech Stack

- **Framework:** Astro 6.x (static output)
- **Styling:** UnoCSS 66.x (atomic CSS)
- **Interactivity:** Alpine.js 3.x
- **i18n:** Lingui 5.x (PO files, English → French)
- **Package Manager:** Bun

### Component Architecture

Components are organized in `src/components/`:

- `blocks/` -- Composed blocks (PageHero, PageHeader)
- `primitives/` -- Base UI elements (Button, Tag)
- `patterns/` -- Composite components (SectionTitle)
- `nav/` -- Navigation components
- `typography/` -- Text components

### Small Contributions

Small contributions such as fixing spelling errors, typo correction, white space and formatting changes, or changes to config files (Justfile, Dockerfile, etc.) can be submitted directly without creating an issue first.

## How to Report a Bug

**If you find a security vulnerability, do NOT open an issue.** Email [opensource@kodaskills.co](mailto:opensource@kodaskills.co) instead.

When filing an issue, make sure to answer these questions:

1. What version of the project are you using?
2. What operating system and browser are you using?
3. What did you do?
4. What did you expect to see?
5. What did you see instead?

## How to Suggest a Feature or Enhancement

Kodaskills.co is a minimalist company website for an Excellence Tech Advisory firm. Our philosophy is to keep things simple, fast, and accessible.

If you find yourself wishing for a feature that doesn't exist, you are probably not alone. Open an issue on our issues list on GitHub which describes:

- The feature you would like to see
- Why you need it (use case)
- How it should work

Many of the features we have today have been added because our users saw the need.

## Code Review Process

The core team looks at Pull Requests on a regular basis. After feedback has been given we expect responses within two weeks. After two weeks we may close the pull request if it isn't showing any activity.

### PR Checklist

Before submitting your Pull Request, please ensure:

- [ ] Code follows project standards (ran `just lint`)
- [ ] TypeScript checks pass (`just check`)
- [ ] No unused exports/dependencies (`just knip`)
- [ ] Translations are up-to-date (`just i18n-check`)
- [ ] Commits follow conventional format
- [ ] Branch name follows convention

Once your PR is ready, a maintainer will review it. Address any requested changes, and once approved, a maintainer will merge it. Deploy to Cloudflare Pages happens automatically after merge to `main`.

## Community

You can reach us at [opensource@kodaskills.co](mailto:opensource@kodaskills.co) for questions or discussions.

## Code Conventions

### Formatting

- 2-space indentation
- Line width: 100 characters
- Double quotes
- ES5 trailing commas
- Organized imports (auto-sorted by Biome)

### Commit Messages

We use **Gitmoji + Conventional Commits** format:

```
:gitmoji: <type>(scope?): <description>
```

The interactive commit prompt will guide you through the correct format with gitmoji selection.

### Branch Naming

Branch names must follow: `^(main|(feature|fix|chore|release|hotfix)/[a-z0-9-]+)$`

Examples: `feature/hero-section`, `fix/contact-form`, `release/v1.0.0`

### Internationalization

- **English (en)** is the source locale
- **French (fr)** is the target locale
- Use `just i18n-sync` to extract new strings
- Translate entries in `src/locales/{locale}.po`
- Never leave `msgstr ""` empty (CI will fail)

---

Thank you for contributing! 🎉
