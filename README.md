# Rust Deep Dive

A bilingual (EN/TH), interactive, standalone course that teaches the **Rust language** in depth — syntax, ownership & borrowing, structs/enums/pattern matching, traits & generics, error handling, collections & iterators, and concurrency/testing/Cargo. It is language-core focused (the language and its type system), not a framework tutorial.

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Site framework | [Astro 6](https://astro.build) + [Starlight 0.40](https://starlight.astro.build) |
| UI islands | [Preact](https://preactjs.com) (via `@astrojs/preact`) |
| Runnable code | **Rust Playground API** — `<Playground>` POSTs the snippet to `play.rust-lang.org/execute` and shows the compiler output/result. No backend of our own. |
| Unit tests | [Vitest](https://vitest.dev) + `@testing-library/preact` |
| Styling | Starlight default + custom CSS (`src/styles/custom.css`) |
| i18n | Starlight built-in, `defaultLocale: 'en'`, locales: `en` + `th` |

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview the production build locally
npm test           # Run Vitest unit tests
```

> No runner build step — Rust compiles & runs on the official Rust Playground service (the `<Playground>` Run button POSTs the snippet).

## Content Structure

```
src/content/docs/
  en/                          # English — served at /en/...
    basics/
    ownership-borrowing/
    structs-enums-matching/
    traits-generics/
    error-handling/
    collections-iterators/
    concurrency-testing-cargo/
    index.mdx                  # EN landing (splash)
  th/                          # Thai — served at /th/...
    (same module directories)
    index.mdx                  # TH landing (splash)
```

### The 7 Modules

| Directory | Module |
| --------- | ------ |
| `basics` | Basics & Syntax |
| `ownership-borrowing` | Ownership & Borrowing (moves, references, mutable borrows, slices) |
| `structs-enums-matching` | Structs, Enums & Pattern Matching |
| `traits-generics` | Traits & Generics (trait objects, lifetimes) |
| `error-handling` | Error Handling (panic, Result, `?`, custom errors) |
| `collections-iterators` | Collections & Iterators (closures) |
| `concurrency-testing-cargo` | Concurrency, Testing & Cargo |

### Lesson Template

frontmatter (`title`, `description`, `sidebar.order`) → imports → concept intro → prose → hoisted `export const ...Code` + `<Playground code={...} />` → `<Callout>` (key point / gotcha) → `<Quiz>` → `<ProgressTracker>` (last). IDs follow `<module>/<slug>`.

> **⚠️ Authoring notes (Rust + MDX):**
> - **Use 4-space indentation in `export const` Rust snippets — never tab characters.** (Do not run a `\n`/`\t`-doubling escaping codemod; it corrupts indentation.)
> - **Rust string escapes inside `export const` template literals must be doubled** (`\\n` / `\\t`). Format macros use single braces (`{}`, `{:?}`, `{name}`) which are fine inside the backtick string.
> - **Never put a bare `{...}` in prose or headings** — keep struct literals and format strings in backtick code spans or fenced ```rust blocks.
> - **Never put a bare angle-bracket generic in prose** — `Vec<T>`, `Option<T>`, `&str`, `Box<dyn Trait>` are parsed as HTML/JSX tags and break MDX. Always wrap them in backtick code spans.
> - **Internal links must include the base path**, e.g. `/rust-deep-dive/en/ownership-borrowing/`.

### Rust Playground notes

The Playground compiles against std with threads available, but **no external crates** by default and it runs a `fn main` (not `cargo test`). So:
- Threads, `Arc`/`Mutex`, and `std::sync::mpsc` channels run live.
- async (`tokio`) and `cargo test` / `#[test]` lessons are shown as code with a "run in a Cargo project" callout rather than a live runner.
- Snippets that use `?` do so in a function returning `Result`/`Option` (or a `main` returning `Result`).

## Deployment

Fully static (`output: 'static'`) → `dist/`. Deploys to GitHub Pages via `.github/workflows/deploy.yml` (build with `withastro/action` on Node 22, publish with `actions/deploy-pages`).

One-time setup: create the repo, push `main`, set **Settings → Pages → Source: GitHub Actions**. Base path in `astro.config.mjs`: `site: 'https://avetavos.github.io'`, `base: '/rust-deep-dive'`. If you change `base`, update the base-prefixed links in `src/content/docs/{en,th}/index.mdx`.
