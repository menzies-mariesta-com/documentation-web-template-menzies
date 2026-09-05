---
title: Icons
description: Lucide icons pinned at 1.28.0 and Simple Icons brands for product logos.
section: reference
order: 2
---

# Icons

Wash UI standardizes on **Lucide 1.28.0** for UI icons and **Simple Icons** for brand marks.

## In Svelte apps

Install the matching Svelte package:

```bash
npm i -D @lucide/svelte@1.28.0
```

```svelte
<script lang="ts">
  import { BookOpen, Moon, Sun } from '@lucide/svelte'
</script>

<BookOpen class="size-4" aria-hidden="true" />
```

## In React apps

Import from the design system:

```ts
import { BookOpen } from '@menzies-mariesta-com/menzies-design-wash-ui/icons'
```

Brands:

```ts
import { BrandIcon } from '@menzies-mariesta-com/menzies-design-wash-ui/icons/brands'
```

A full catalog entrypoint lives at `/icons/brands/catalog`.

## Usage rules

- Generic UI (plus, trash, settings, search): Lucide
- Company or product logos (GitHub, npm, Svelte): Simple Icons / brand helpers
- Icon-only buttons need a daisyUI `tooltip` and matching `aria-label`
- Do not mix other icon packs for chrome unless you have a strong product reason

## Live gallery

Browse the full icon sets in the [Wash UI gallery](https://wash-ui.menzies.design).
