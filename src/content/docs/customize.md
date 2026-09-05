---
title: Customize
description: Compose pages with HTML classes, washRecipes, and theme overrides without forking the design system.
section: guide
order: 3
---

# Customize

Wash UI is meant to be composed, not forked. Start from documented classes and recipes, then layer your product layout on top.

## Compose with classes

```html
<div class="page-wash paper-grain wash-shell">
  <main class="wash-shell-main">
    <section class="wash-panel paper-grain space-y-4">
      <h1 class="font-display text-2xl font-semibold">Studio plate</h1>
      <button type="button" class="btn btn-primary ripple cursor-pointer">
        Continue
      </button>
    </section>
  </main>
</div>
```

## Stable recipes

Import `washRecipes` when you want the same class strings the React adapter uses:

```js
import { washRecipes } from '@menzies-mariesta-com/menzies-design-wash-ui/core'

element.className = washRecipes.washShell
main.className = washRecipes.washShellMain
panel.className = washRecipes.washPanel
button.className = washRecipes.btnRipple
```

## Tables

Data tables should use zebra striping and primary hover:

```html
<table class="table table-zebra [&_tbody_tr]:hover:bg-primary/40">
  <!-- … -->
</table>
```

That string is also available as `washRecipes.table`.

## Tooltips on icon buttons

Match tooltip tone to the button:

```html
<div class="tooltip tooltip-primary tooltip-right" data-tip="Edit">
  <button
    type="button"
    class="btn btn-ghost btn-square btn-primary cursor-pointer"
    aria-label="Edit"
  >
    <!-- icon -->
  </button>
</div>
```

In overflow table shells, prefer `tooltip-right` so tips open into the row.

## Theme without restyling components

Call `setPigment` / `setMode` (or `applyTheme`) instead of rewriting component CSS. If you need a product-specific accent, prefer a pigment that already fits, or contribute a pigment upstream rather than scattering overrides.

## Framework adapters

- **Any framework:** `/core` + `styles.css` (this site)
- **React:** `/react` with `WashProvider`, `WashShell`, `WashPanel`
- **Charts / email builders:** React entrypoints documented in the package README and live gallery
