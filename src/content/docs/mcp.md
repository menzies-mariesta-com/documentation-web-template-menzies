---
title: MCP server
description: Use wash-ui-mcp so coding agents can search components and documentation.
section: reference
order: 4
---

# MCP server

**`@menzies-mariesta-com/wash-ui-mcp`** is an MCP (Model Context Protocol) server that exposes Wash UI documentation and component APIs to coding agents.

## Why use it

Agents can search components by name or keyword, pull setup snippets (including SvelteKit boot), and read docs sections without scraping the gallery.

Typical tools include:

- `search_components`
- `search_docs`
- Snippet helpers for framework bootstraps

## Install

Published on GitHub Packages alongside the design system (same `@menzies-mariesta-com` scope). Point your MCP client at the package per the MCP README in the [design-lib-menzies](https://github.com/menzies-mariesta-com/design-lib-menzies) monorepo.

## Compose twin

Android / Compose Multiplatform has a sibling MCP (`wash-compose-mcp`) and artifact `com.mariesta.menzies:menzies-design-wash-compose`. Use the web MCP for this CSS/JS design system.

## Pair with human docs

MCP accelerates implementation; this site remains the human-readable source for Getting started, theming, and core APIs. Keep both updated when you publish a new Wash UI version.
