---
title: Theming
description: Thirty watercolor pigments, light and dark paper modes, and persisted theme storage.
section: guide
order: 1
---

# Theming

Wash UI themes are **pigments** (watercolor palettes) combined with a **paper mode** (`light` or `dark`). Choosing a pigment sets CSS variables and a `data-theme` attribute so daisyUI components follow the plate.

## Apply a theme

```js
import { applyTheme, initWash } from '@menzies-mariesta-com/menzies-design-wash-ui/core'

// One-shot
applyTheme('cerulean', 'dark')

// Or via the runtime returned by initWash
const wash = initWash({ defaultPigment: 'mineral', defaultMode: 'light' })
wash.setPigment('indigo')
wash.setMode('dark')
```

## Persistence

Theme and mode are stored in `localStorage`:

| Key | Purpose |
|-----|---------|
| `design-web-menzies-theme` | Pigment id |
| `design-web-menzies-mode` | `light` or `dark` |

`initWash` and `applyTheme` read these keys when you omit defaults, so returning visitors keep their plate.

A custom event `design-web-menzies-theme-change` fires when the theme updates so shells can sync UI.

## Pigments

Thirty pigments ship with the package, including:

| Id | Label | Character |
|----|-------|-----------|
| `mineral` | Mineral | Blue, ochre, rose (default) |
| `indigo` | Indigo | Deep lake violet |
| `celadon` | Celadon | Sage glaze |
| `vermilion` | Vermilion | Warm lake red |
| `sepia` | Sepia | Archival ink |
| `cobalt` | Cobalt | Bright mineral blue |
| `moss` | Moss | Botanical green |
| `saffron` | Saffron | Warm spice yellow |
| `slate` | Slate | Cool stone |
| `cerulean` | Cerulean | Open sky blue |
| `crimson` | Crimson | Strong red |
| `ink` | Ink | Near-black studio |

Import `watercolorThemes` from `/core` or `/theme` for the full list with swatches and notes.

## Typography atmosphere

Wash UI pairs **Fraunces** (display) with **Maple Mono** (UI). Fonts are included with the stylesheet. Use `font-display` for titles where the design system exposes that utility.

## Reduced motion

Ripple and motion helpers respect `prefers-reduced-motion`. Prefer pausing decorative loops when content is off-screen.
