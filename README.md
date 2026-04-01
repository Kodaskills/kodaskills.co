<div align="center">

# Kodaskills

### **kodaskills.co** is an open-source minimalist company website for an Excellence Tech Advisory firm. It showcases technical expertise, services, and methodology with static generation, responsive design, and easy content management.

[![Website](https://img.shields.io/website-up-down-green-red/https/kodaskills.co.svg?label=website&style=for-the-badge)](https://kodaskills.co)
[![CI Status](https://img.shields.io/badge/CI-Passing-success?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/Kodaskills/kodaskills.co/actions)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Contributors](https://img.shields.io/github/contributors/Kodaskills/kodaskills.co?style=for-the-badge)](https://github.com/Kodaskills/kodaskills.co/graphs/contributors)
[![Last Commit](https://img.shields.io/github/last-commit/Kodaskills/kodaskills.co/main?style=for-the-badge)](https://github.com/Kodaskills/kodaskills.co/commits/main)

### Built with:
[![Astro](https://img.shields.io/badge/Astro-6.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build) [![Alpine.js](https://img.shields.io/badge/Alpine.js-3.14-8BC0D8?style=for-the-badge&logo=alpine.js&logoColor=white)](https://alpinejs.dev) [![UnoCSS](https://img.shields.io/badge/UnoCSS-66.3-4B32C3?style=for-the-badge&logo=unocss&logoColor=white)](https://unocss.dev) [![Lingui](https://img.shields.io/badge/i18n-Lingui-46a0fc?style=for-the-badge)](https://lingui.dev) [![Analysis](https://img.shields.io/badge/Analysis-Biome-60A5FA?style=for-the-badge&logo=biome)](https://biomejs.dev) [![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com) [![Just](https://img.shields.io/badge/Just-FF5722?style=for-the-badge&logo=just)](https://just.systems)

</div>

---

## 🚀 Getting Started

### Prerequisites

- [Docker](https://docker.com) + Docker Compose
- [Just](https://just.systems) (command runner)

### Quick Start

```bash
# Clone the repo
git clone https://github.com/kodaskills/kodaskills.co.git
cd kodaskills.co

# Start dev server → http://localhost:4321
just dev

# Start component explorer (Astrobook) → http://localhost:4322
just book
```

---

## 📁 Project Architecture

```
src/
├── components/
│   ├── blocks/       # Composed blocks (PageHero, PageHeader, ...)
│   ├── primitives/   # Base UI (Button, Tag, ...)
│   ├── patterns/     # Composites (SectionTitle)
│   ├── nav/          # Navigation components
│   └── typography/   # Text components
├── layouts/
│   ├── BaseLayout.astro
│   └── LegalLayout.astro
├── pages/
│   └── [...locale]/  # Dynamic i18n routes (en, fr)
│       ├── index.astro
│       ├── approach.astro
│       ├── expertises.astro
│       └── contact.astro
├── i18n/             # Internationalization setup
├── locales/          # Translation catalogs (.ts, .po)
├── lib/              # Utilities and helpers
└── styles/           # Global CSS
```

### Path Aliases

| Alias | Resolves to |
|-------|-------------|
| `@components` | `src/components` |
| `@layouts` | `src/layouts` |
| `@i18n` | `src/i18n` |
| `@lib` | `src/lib` |
| `@styles` | `src/styles` |

---

## 💻 Commands

Run `just` to see all available commands.

```bash
just
```

Examples of useful commands:

```bash
just dev      # Start dev server → http://localhost:4321
just build    # Build static site to ./dist
just lint     # Biome format + lint with auto-fix
```

---

## 🤝 Contributing

### Branch Naming

```
main | <type>/<slug>

Examples:
- feature/hero-section
- fix/contact-form
- chore/deps-update
```

The branch name is validated on commit via [validate-branch-name](https://github.com/errata-ct/validate-branch-name).

### Commit Command

We enforce [gitmoji](https://gitmoji.dev) + [Conventional Commits](https://www.conventionalcommits.org) format, validated by the commit hook.

**Interactive** (uses `czg` prompt):

```bash
git commit
```

**Direct message:**

```bash
git commit -m ":gitmoji: <type>(scope?): <description>"
```

Examples of valid messages:

```
✨ feat: add new component
🐛 fix(readme): resolve commit examples
📝 docs(contributing): update contribution guide
```

Format: `:gitmoji: <type>(scope?): <description>`

> **Amending a commit:** `git commit --amend` will trigger the czg interactive prompt. You can interrupt it (Ctrl+C) to keep the original commit message.

### Adding Translations

```bash
# 1. Add new translatable strings in source code using _("key")
# 2. Extract and compile
just i18n-sync
# 3. Edit src/locales/fr.po with translations
# 4. Recompile
just i18n-compile
# 5. Verify no missing translations
just i18n-check
```

---

## 📄 License

**MIT License** — See [LICENSE](LICENSE.md) for details.

---

## 🙏 Acknowledgments

Built with gratitude to the open-source tools that empower our development.

---

<div align="center">
    
**Maintained with 🔥 by the [Kodaskills](https://github.com/Kodaskills) team**

[![Hosted on Cloudflare](https://img.shields.io/badge/Hosted%20on-Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://cloudflare.com)

</div>
