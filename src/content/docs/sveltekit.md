---
title: SvelteKit
description: Boot Wash UI in a SvelteKit root layout with styles.css and initWash.
section: getting-started
order: 2
---

# SvelteKit

This **Documentation** site is a living SvelteKit example of Wash UI **core**: stylesheet plus `initWash`, no React peers required.

## 1. Create a project

```bash
npm create svelte@latest my-wash-app
cd my-wash-app
```

## 2. Install Wash UI

Project `.npmrc`:

```ini
@menzies-mariesta-com:registry=https://npm.pkg.github.com
```

```bash
npm i @menzies-mariesta-com/menzies-design-wash-ui@1.0.4
```

## 3. Import styles in the root layout

```svelte
<script lang="ts">
  import '@menzies-mariesta-com/menzies-design-wash-ui/styles.css'
</script>
```

## 4. Boot initWash on mount

```svelte
<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import {
    initWash,
    type WashRuntime
  } from '@menzies-mariesta-com/menzies-design-wash-ui/core'
  import '@menzies-mariesta-com/menzies-design-wash-ui/styles.css'

  let wash: WashRuntime | undefined

  onMount(() => {
    wash = initWash({
      defaultPigment: 'mineral',
      defaultMode: 'light'
    })
  })

  onDestroy(() => {
    wash?.destroy()
  })
</script>

<slot />
```

With Svelte 5 runes, the same pattern uses `onMount` / `onDestroy` (or `$effect` with a cleanup) so the runtime is created only in the browser.

## 5. Use HTML classes on pages

```svelte
<button type="button" class="btn btn-primary ripple cursor-pointer">
  Save plate
</button>
```

## 6. Run the app

```bash
npm run dev
```

## Tips

- Keep Tailwind for your own utilities if you already use it. Wash ships compiled theme CSS including daisyUI tokens.
- Prefer Lucide at **1.28.0** to match the design system pin (`@lucide/svelte@1.28.0`).
- Icon-only controls should use daisyUI `tooltip` classes matching the button tone.
- For React-only pieces (charts, React primitives), see the package `/react` and `/charts` entrypoints, or the live gallery at [wash-ui.menzies.design](https://wash-ui.menzies.design).
