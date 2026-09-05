---
title: Core API
description: initWash, applyTheme, ripples, smart tooltips, a11y helpers, and washRecipes.
section: reference
order: 1
---

# Core API

Import from `@menzies-mariesta-com/menzies-design-wash-ui/core`.

## initWash

```ts
function initWash(options?: InitWashOptions): WashRuntime
```

| Option | Default | Meaning |
|--------|---------|---------|
| `defaultPigment` | stored or `mineral` | Initial pigment |
| `defaultMode` | stored or `light` | Initial paper mode |
| `enableEffects` | `true` | Attach document ripple + smart tooltips |

Returns:

| Method | Role |
|--------|------|
| `getPigment` / `setPigment` | Read or change pigment |
| `getMode` / `setMode` | Read or change light/dark |
| `destroy` | Remove listeners / effects |

## applyTheme

```ts
applyTheme(pigment: WatercolorThemeId, mode?: ThemeMode)
```

Applies the plate immediately and persists storage keys. Use when you do not need the full runtime.

## Ripple

```ts
attachGlobalRipple()
spawnRipple(origin, options?)
clearRipples()
```

Global ripple listens for presses on `.ripple` hosts. Prefer `prefersReducedMotion` checks for custom motion.

## Smart tooltips and dropdowns

```ts
attachSmartTooltips()
measureTooltipPlacement(...)
measureDropdownPlacement(...)
```

These helpers flip tooltip/dropdown placement so overflow containers do not clip panels. Pair with daisyUI `tooltip` / `dropdown` markup.

## Accessibility helpers

```ts
createWashId(prefix?)
createLiveAnnouncer()
trapFocus(container)
```

Use for dialogs and live status text when building custom overlays in non-React apps.

## washRecipes

Stable class strings for shell, panels, tables, alerts, and buttons. Prefer recipes over copying class soup between frameworks.

## Brand helpers

```ts
washUiBrandText
washUiBrandLabel
washUiBrandInlineHtml
WASH_UI_VERSION
```

## Theme exports

`watercolorThemes`, `isWatercolorTheme`, `THEME_CHANGE_EVENT`, storage key constants, and related types are re-exported from `/core` (also available from `/theme`).
