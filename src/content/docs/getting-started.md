---
title: Getting started
description: Install Wash UI from GitHub Packages and render your first themed control.
section: getting-started
order: 1
---

# Getting started

**Menzies Design Wash UI** is a framework-free design system: pigment themes, daisyUI-based utilities, and DOM helpers. Optional React adapters exist for components and charts. This **Documentation** site uses the **core** path (Wash UI from the package) that works in Svelte, Vue, vanilla, and more.

## Install from GitHub Packages

Wash UI is published to GitHub Packages (not the public npm registry). Add a project `.npmrc`:

```ini
@menzies-mariesta-com:registry=https://npm.pkg.github.com
```

Authenticate to `npm.pkg.github.com` with a GitHub token that can read packages, then install:

```bash
npm i @menzies-mariesta-com/menzies-design-wash-ui@1.0.4
```

## Import styles and boot core

```js
import '@menzies-mariesta-com/menzies-design-wash-ui/styles.css'
import { initWash } from '@menzies-mariesta-com/menzies-design-wash-ui/core'

const wash = initWash({
  defaultPigment: 'mineral',
  defaultMode: 'light'
})

// Later: wash.setPigment('cerulean')
// Later: wash.setMode('dark')
// On teardown: wash.destroy()
```

`initWash` applies the pigment theme and (by default) installs document-level ripple and smart tooltip placement.

## First control

Compose UI with documented HTML classes:

```html
<button type="button" class="btn btn-primary ripple cursor-pointer">
  Save plate
</button>
```

## Shell layout

Use the wash shell recipes for page atmosphere and padded content:

```html
<div class="page-wash paper-grain wash-shell">
  <main class="wash-shell-main">
    <article class="wash-panel paper-grain">
      Content sits padded by default.
    </article>
  </main>
</div>
```

Or import stable class strings from `washRecipes` in `/core`.

## Next steps

- Follow the [SvelteKit](/docs/sveltekit) guide if you are on this stack.
- Read [Theming](/docs/theming) for pigments and light/dark mode.
- See [Core API](/docs/core-api) for `initWash`, ripples, and helpers.
