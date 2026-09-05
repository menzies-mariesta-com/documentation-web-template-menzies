---
title: Charts overview
description: Pigment-aware ApexCharts via the React /charts entrypoint.
section: reference
order: 3
---

# Charts overview

Wash UI ships pigment-aware chart wrappers built on **ApexCharts** for React applications.

## Install path

Charts live under the package export:

```ts
import { /* chart components */ } from '@menzies-mariesta-com/menzies-design-wash-ui/charts'
```

Peer React dependencies are required for this entrypoint. The framework-free `/core` path used by this SvelteKit docs site does **not** re-export chart components.

## What you get

Gallery categories include line, area, bar, column, pie/donut, sparkline, heatmap, treemap, sunburst, box plot, violin, candlestick, histogram, radar, funnel, scatter, bubble, synced charts, and brush/zoom/realtime variants. Charts follow the active pigment so analytics screens match the rest of the plate.

## When to use

- Use `/charts` inside React (Vite, Next.js) apps that already adopt `WashProvider`.
- For Svelte or Vue, either embed React islands, wrap ApexCharts yourself with Wash CSS tokens, or link users to a React surface for heavy analytics.

## Learn more

Explore interactive examples on [wash-ui.menzies.design](https://wash-ui.menzies.design) under the Charts sidebar group.
