# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Type-check (astro check) then build to ./dist/
npm run preview    # Preview the production build locally
```

There are no tests in this project.

## Architecture

Single-page personal portfolio for José Luis Tanicuchí Cadena, built with **Astro 5 + Tailwind CSS v4**.

**Single page, single route:** `src/pages/index.astro` is the only page. It composes section components inside `Layout.astro`.

**Page sections (in order):** `Hero` → `Experience` → `Projects` → `AboutMe`, each wrapped in `<SectionContainer>` with IDs `#experiencia`, `#proyectos`, `#sobre-mi`.

**Data is co-located in components:** Content arrays (experience items, project cards) are defined directly inside their respective `.astro` component files — there is no separate data layer or CMS.

**Icons:** SVGs live in `src/components/icons/`. Most are `.svg` files imported directly as Astro components (Astro's built-in SVG component support). `YouTubeIcon` is the exception — it's a `.astro` file.

**Path alias:** `@/` maps to `src/` (configured in `tsconfig.json`). Use `@/components/...` for imports.

**Theme toggle:** Implemented with `<script is:inline>` in `ThemeToggle.astro`. It reads/writes `localStorage("theme")` and toggles a `dark` class on `<html>`. Astro's `ClientRouter` (View Transitions) is enabled globally in `Layout.astro`.

**Styling:** Tailwind v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.*` file). Global styles and scroll animations for the sticky nav are in `Layout.astro`'s `<style is:global>` block. The font is `Onest Variable` from `@fontsource-variable/onest`.

## Deployment

Push to `main` triggers a GitHub Actions workflow (`.github/workflows/`) that builds the site and deploys `./dist/` to cPanel via FTPS. Secrets required: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

## Adding a project

Edit the `PROJECTS` array in `src/components/Projects.astro`. Each entry needs `title`, `description`, `image` (path under `/public/img/projects/`), `tags` (from the `TAGS` map at the top of the file), and optionally `link` and `github`.
