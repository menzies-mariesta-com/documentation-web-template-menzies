---
title: Tokens
description: CSS variables, ink colors, and typography tokens behind Wash UI pigments.
section: guide
order: 2
---

# Tokens

Wash UI tokens are exposed as CSS custom properties after a pigment theme is applied. Components and utilities read those variables so a single `applyTheme` call restyles the page.

## What changes with a pigment

Each pigment updates:

- Primary / secondary / accent semantic colors
- Base surfaces (`base-100`, `base-200`, `base-300`)
- Ink and muted text colors
- Border and wash atmosphere cues

Use daisyUI semantic classes (`btn-primary`, `text-base-content`, `border-base-300`, `bg-base-100`) instead of hard-coded hex values so your UI tracks the active plate.

## Ink helpers

Wash CSS includes ink-oriented utilities used across the gallery and this docs site, for example muted copy and soft borders (`text-ink-muted`, `border-ink-border`). Prefer these over one-off gray scales.

## Typography

| Role | Face | Typical use |
|------|------|-------------|
| Display | Fraunces | Page titles, brand wordmarks |
| UI / mono | Maple Mono | Body chrome, code-adjacent UI |

Headings in documentation often use `font-display` with tight tracking for a studio feel.

## Spacing and panels

- `wash-panel` adds a paper panel with default padding.
- `wash-panel-flush` drops padding for dense headers or grids.
- `wash-shell-main` constrains content width and applies page gutters.

## Do not invent parallel tokens

When extending the system, map new UI to existing daisyUI semantics and Wash recipes (`washRecipes` in `/core`) rather than introducing a second color vocabulary.
