# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Thilak — a static single-page site built with **vanilla HTML, CSS, and JavaScript**. No build tools, no package manager, no framework. Designed with a dark editorial aesthetic targeting recruiters.

## Development

There is no build step. Open `index.html` directly in a browser or serve with any static file server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

No tests exist. No linter is configured.

## Architecture

Three files contain the entire application:

- **`index.html`** — Single-page structure with four sections (Hero, Projects, Skills, About) plus two overlay modals (project details, resume viewer)
- **`styles.css`** — Full design system using CSS custom properties. Dark mode is default; light mode via `[data-theme="light"]` overrides. Breakpoints at 900px, 680px, and 400px.
- **`script.js`** — Modular init functions called on DOMContentLoaded. Project and skill data live as JS arrays (`projectsData`, `coreTools`) and are rendered dynamically.

### JS Module Structure (in script.js)

Each feature is an `init*` function: `initTheme()`, `initNav()`, `initReveal()`, `renderProjects()`, `renderSkills()`. Overlay modals use `showProjectOverlay()`/`hideProjectOverlay()` and `showResumeOverlay()`/`hideResumeOverlay()`.

### CSS Design System (in styles.css)

- **Fonts**: Instrument Serif (headings), Outfit (body) — loaded from Google Fonts
- **Colors**: Warm gold accent (`#c9a84c` dark / `#9e7c28` light), deep black backgrounds, green status dot (`#5bb89a`)
- **Shadows/Radius**: Defined as CSS variables (`--shadow-sm` through `--shadow-xl`, `--radius-sm/md/lg`)

### Content Updates

- **Projects**: Edit the `projectsData` array in `script.js`. Each entry has `title`, `subtitle`, `tags`, `badges`, `descriptionHTML`, and optional `links`.
- **Skills**: Edit the `coreTools` array in `script.js`. Icon mapping is handled by `getTagLogo()` which resolves to Simple Icons CDN URLs.

## Conventions

- CSS classes use kebab-case with BEM-inspired prefixes: `.hero-*`, `.project-*`, `.ov-*` (overlay), `.btn-*`
- JavaScript uses camelCase for variables/functions
- Section separators in both CSS and JS use `// ========` comment blocks
- IntersectionObserver handles scroll-reveal animations (`.reveal` class)
- Theme preference persists via localStorage

## Static Assets

- `IMG_7989.JPG` — Hero photo
- `resume_Thilak_ML_v2.pdf` — Resume (shown in iframe overlay, with download fallback on mobile)
- External: Google Fonts, Simple Icons via jsdelivr CDN
