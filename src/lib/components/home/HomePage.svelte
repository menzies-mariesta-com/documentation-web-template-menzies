<script lang="ts">
	import { onMount } from 'svelte';
	import {
		BookOpen,
		Command,
		Layers,
		Paintbrush,
		PanelLeft,
		Rocket,
		Search,
		Sparkles
	} from '@lucide/svelte';
	import { WASH_UI_VERSION } from '@menzies-mariesta-com/menzies-design-wash-ui/core';
	import BrandMark from '$lib/components/docs/BrandMark.svelte';
	import FeatureInk from './FeatureInk.svelte';
	import WashSplash from './WashSplash.svelte';
	import { mountHomeMotion } from '$lib/tool/home-gsap';

	let root = $state<HTMLElement | null>(null);

	onMount(() => {
		if (!root) return;
		let disposed = false;
		let dispose: (() => void) | undefined;
		void mountHomeMotion(root).then((fn) => {
			if (disposed) fn();
			else dispose = fn;
		});
		return () => {
			disposed = true;
			dispose?.();
		};
	});
</script>

<div bind:this={root} class="home-page">
	<section
		class="home-hero relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center overflow-hidden px-4 py-24 sm:px-6 sm:py-28"
	>
		<WashSplash />

		<div
			class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_oklab,var(--color-base-100)_70%,transparent),transparent_55%)]"
			aria-hidden="true"
		></div>

		<div class="relative mx-auto w-full max-w-5xl">
			<div class="max-w-2xl">
				<div class="home-hero__eyebrow flex items-center gap-3">
					<BrandMark size="lg" />
					<p class="font-display text-sm font-medium tracking-wide text-primary">
						Menzies Design · Wash UI v{WASH_UI_VERSION}
					</p>
				</div>
				<h1
					class="home-hero__title font-display mt-4 text-5xl font-semibold tracking-tight text-base-content sm:text-6xl md:text-7xl"
				>
					Documentation
				</h1>
				<p class="home-hero__lede mt-5 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
					A documentation site that feels like the product it documents. Built with Wash UI
					v{WASH_UI_VERSION}: pigments, search, and a docs shell ready for your Markdown.
				</p>
				<div class="home-hero__cta mt-9 flex flex-wrap items-center gap-3">
					<a href="/docs/getting-started" class="btn btn-primary ripple cursor-pointer">
						Get started
					</a>
					<a href="/docs/theming" class="btn btn-ghost cursor-pointer">Explore theming</a>
				</div>
			</div>

			<div class="pointer-events-none absolute -end-2 top-8 hidden lg:block" aria-hidden="true">
				<span
					class="home-hero__orb absolute size-16 rounded-full bg-primary/25 blur-[1px]"
					style="translate: 0 0"
				></span>
				<span
					class="home-hero__orb absolute size-10 rounded-full bg-secondary/30"
					style="translate: 4.5rem 2.5rem"
				></span>
				<span
					class="home-hero__orb absolute size-7 rounded-full bg-accent/35"
					style="translate: 1.5rem 5rem"
				></span>
			</div>
		</div>
	</section>

	<section class="home-reveal relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
		<div
			class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-border/40 to-transparent"
			aria-hidden="true"
		></div>
		<div class="relative mx-auto max-w-5xl">
			<p class="label-ink text-primary">Built for docs teams</p>
			<h2 class="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
				Everything you need after clone
			</h2>
			<p class="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
				Marketing home, docs chrome, pigments, SEO, and Netlify deploy. Skip the weeks of shell
				wiring.
			</p>
		</div>
	</section>

	<section
		class="home-feature relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
		aria-labelledby="feature-shell"
	>
		<div
			class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-border/35 to-transparent"
			aria-hidden="true"
		></div>
		<div class="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="home-feature__copy min-w-0">
				<p class="label-ink text-primary">Docs shell</p>
				<h2
					id="feature-shell"
					class="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
				>
					Sidebar, TOC, and prev/next that stay put
				</h2>
				<p class="mt-3 text-base leading-relaxed text-ink-muted">
					Collapsible groups, breadcrumbs, and a scrolling article pane. Markdown under
					<code class="text-xs">src/content/docs/</code> reads like a product, not a wiki dump.
				</p>
				<p class="mt-5">
					<a
						href="/docs/getting-started"
						class="link link-hover cursor-pointer font-medium text-primary"
					>
						Open Getting started
					</a>
				</p>
			</div>
			<div class="home-feature__art relative min-h-64" aria-hidden="true">
				<FeatureInk variant="shell" />
				<div
					class="relative overflow-hidden rounded-box border border-ink-border/50 bg-base-100/85 shadow-sm paper-grain"
				>
					<div class="flex min-h-64">
						<aside
							class="hidden w-36 shrink-0 border-e border-ink-border/50 bg-base-200/50 p-3 sm:block"
						>
							<div class="mb-3 flex items-center gap-2 text-xs font-semibold text-base-content">
								<PanelLeft class="size-3.5 text-primary" strokeWidth={2} />
								Nav
							</div>
							<ul class="space-y-2 text-[0.7rem] text-ink-muted">
								<li class="rounded-field bg-primary/15 px-2 py-1 text-primary">Getting started</li>
								<li class="px-2 py-1">SvelteKit</li>
								<li class="px-2 py-1">Theming</li>
								<li class="px-2 py-1">Tokens</li>
							</ul>
						</aside>
						<div class="flex min-w-0 flex-1 flex-col">
							<div class="flex items-center gap-2 border-b border-ink-border/50 px-3 py-2">
								<span class="h-2 w-24 rounded-full bg-base-300"></span>
								<span
									class="ms-auto flex items-center gap-1 rounded-full border border-ink-border/60 px-2 py-0.5 text-[0.65rem] text-ink-muted"
								>
									<Search class="size-3" strokeWidth={2} />
									Search
									<kbd class="opacity-70">⌘K</kbd>
								</span>
							</div>
							<div class="space-y-2 p-4">
								<div class="h-3 w-2/3 rounded-full bg-base-content/80"></div>
								<div class="h-2 w-full rounded-full bg-base-300"></div>
								<div class="h-2 w-11/12 rounded-full bg-base-300"></div>
								<div class="mt-4 h-20 rounded-box border border-ink-border/40 bg-base-200/60"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section
		class="home-feature relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
		aria-labelledby="feature-themes"
	>
		<div
			class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-border/35 to-transparent"
			aria-hidden="true"
		></div>
		<div class="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="home-feature__art relative order-2 min-h-64 lg:order-1" aria-hidden="true">
				<FeatureInk variant="themes" />
				<div
					class="relative overflow-hidden rounded-box border border-ink-border/50 bg-base-100/85 p-5 shadow-sm paper-grain"
				>
					<div class="mb-4 flex items-center gap-2 text-sm font-semibold">
						<Paintbrush class="size-4 text-secondary" strokeWidth={2} />
						Pigment chrome
					</div>
					<div class="grid grid-cols-5 gap-2 sm:grid-cols-6">
						{#each ['#276C8E', '#5B7C6A', '#8B5E4B', '#6B5B95', '#3D6B6B', '#A67C52', '#4A6FA5', '#7A8B5C', '#9B4D5A', '#2F4858', '#C4A35A', '#5C6B7A'] as swatch (swatch)}
							<span
								class="home-ink__spark aspect-square rounded-field border border-ink-border/40 shadow-inner"
								style="background:{swatch}"
							></span>
						{/each}
					</div>
					<p class="mt-4 text-xs text-ink-muted">Thirty pigments · light and dark paper modes</p>
				</div>
			</div>
			<div class="home-feature__copy order-1 min-w-0 lg:order-2">
				<p class="label-ink text-secondary">Search and themes</p>
				<h2
					id="feature-themes"
					class="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
				>
					Command search and watercolor pigments
				</h2>
				<p class="mt-3 text-base leading-relaxed text-ink-muted">
					<span class="inline-flex items-center gap-1"
						><Command class="size-3.5" strokeWidth={2} /> Ctrl / ⌘ K</span
					>
					indexes every page. Switch paper mode and pigments from the chrome without leaving the docs.
				</p>
				<p class="mt-5">
					<a href="/docs/theming" class="link link-hover cursor-pointer font-medium text-secondary">
						Read theming guide
					</a>
				</p>
			</div>
		</div>
	</section>

	<section
		class="home-feature relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
		aria-labelledby="feature-ship"
	>
		<div
			class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-border/35 to-transparent"
			aria-hidden="true"
		></div>
		<div class="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="home-feature__copy min-w-0">
				<p class="label-ink text-accent">Ship ready</p>
				<h2
					id="feature-ship"
					class="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
				>
					Markdown, SEO, and Netlify in the box
				</h2>
				<p class="mt-3 text-base leading-relaxed text-ink-muted">
					mdsvex content, Shiki dual themes, titles, Open Graph, sitemap, robots, JSON-LD, and
					<code class="text-xs">@sveltejs/adapter-netlify</code> with
					<code class="text-xs">netlify.toml</code>.
				</p>
				<p class="mt-5">
					<a href="/docs/sveltekit" class="link link-hover cursor-pointer font-medium text-accent">
						SvelteKit setup
					</a>
				</p>
			</div>
			<div class="home-feature__art relative min-h-64" aria-hidden="true">
				<FeatureInk variant="ship" />
				<div
					class="relative space-y-3 overflow-hidden rounded-box border border-ink-border/50 bg-base-100/85 p-5 shadow-sm paper-grain"
				>
					<div class="flex items-center gap-2 text-sm font-semibold">
						<Rocket class="size-4 text-accent" strokeWidth={2} />
						Deploy checklist
					</div>
					<ul class="space-y-2 text-sm text-ink-muted">
						<li
							class="flex items-center gap-2 rounded-field border border-ink-border/40 bg-base-200/40 px-3 py-2"
						>
							<span class="size-2 rounded-full bg-success"></span>
							SEO head helper
						</li>
						<li
							class="flex items-center gap-2 rounded-field border border-ink-border/40 bg-base-200/40 px-3 py-2"
						>
							<span class="size-2 rounded-full bg-success"></span>
							sitemap.xml · robots.txt
						</li>
						<li
							class="flex items-center gap-2 rounded-field border border-ink-border/40 bg-base-200/40 px-3 py-2"
						>
							<span class="size-2 rounded-full bg-success"></span>
							Netlify adapter wired
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section
		class="home-grid relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
		aria-labelledby="feature-grid"
	>
		<div
			class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-border/35 to-transparent"
			aria-hidden="true"
		></div>
		<svg
			class="pointer-events-none absolute inset-0 h-full w-full opacity-80"
			viewBox="0 0 1200 400"
			preserveAspectRatio="xMidYMid slice"
			aria-hidden="true"
		>
			<ellipse class="home-ink__drift" cx="200" cy="120" rx="160" ry="100" fill="var(--color-primary)" opacity="0.08" />
			<ellipse class="home-ink__drift" cx="980" cy="280" rx="180" ry="110" fill="var(--color-secondary)" opacity="0.08" />
			<circle class="home-ink__spark" cx="600" cy="80" r="8" fill="var(--color-accent)" opacity="0.3" />
			<circle class="home-ink__spark" cx="720" cy="300" r="6" fill="var(--color-primary)" opacity="0.28" />
		</svg>
		<div class="relative mx-auto max-w-5xl">
			<div class="home-reveal mb-12 max-w-2xl">
				<p class="label-ink text-primary">Also included</p>
				<h2
					id="feature-grid"
					class="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
				>
					The details that make docs feel finished
				</h2>
			</div>
			<ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<li class="home-grid__item">
					<div
						class="mb-3 inline-flex size-10 items-center justify-center rounded-field bg-primary/15 text-primary"
					>
						<BookOpen class="size-5" strokeWidth={2} aria-hidden="true" />
					</div>
					<h3 class="font-display text-lg font-semibold">Brand home into docs</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink-muted">
						Hero path into Getting started, guides, and reference without a second site.
					</p>
				</li>
				<li class="home-grid__item">
					<div
						class="mb-3 inline-flex size-10 items-center justify-center rounded-field bg-secondary/15 text-secondary"
					>
						<Layers class="size-5" strokeWidth={2} aria-hidden="true" />
					</div>
					<h3 class="font-display text-lg font-semibold">Any framework core</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink-muted">
						<code class="text-xs">styles.css</code> +
						<code class="text-xs">initWash</code> from
						<code class="text-xs">/core</code>. React peers optional.
					</p>
				</li>
				<li class="home-grid__item">
					<div
						class="mb-3 inline-flex size-10 items-center justify-center rounded-field bg-accent/15 text-accent"
					>
						<Sparkles class="size-5" strokeWidth={2} aria-hidden="true" />
					</div>
					<h3 class="font-display text-lg font-semibold">Studio recipes</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink-muted">
						Shells, panels, ripples, and smart tooltips with stable Wash recipes.
					</p>
				</li>
			</ul>
		</div>
	</section>

	<section class="home-cta relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
		<div
			class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-border/40 to-transparent"
			aria-hidden="true"
		></div>
		<div
			class="home-cta__panel relative mx-auto max-w-5xl overflow-hidden rounded-box border border-ink-border/45 px-6 py-14 text-center paper-grain sm:px-10 sm:py-16"
		>
			<svg
				class="pointer-events-none absolute inset-0 h-full w-full"
				viewBox="0 0 900 360"
				preserveAspectRatio="xMidYMid slice"
				aria-hidden="true"
			>
				<ellipse class="home-ink__drift" cx="160" cy="80" rx="140" ry="90" fill="var(--color-primary)" opacity="0.14" />
				<ellipse class="home-ink__drift" cx="740" cy="260" rx="150" ry="100" fill="var(--color-secondary)" opacity="0.12" />
				<path class="home-ink__spark" d="M450 40 C440 20 460 5 475 20 C490 35 465 65 450 40 Z" fill="var(--color-accent)" opacity="0.35" />
				<path class="home-ink__spark" d="M120 240 C108 210 140 185 165 210 C188 235 145 275 120 240 Z" fill="var(--color-primary)" opacity="0.25" />
			</svg>
			<div class="relative">
				<h2 class="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
					Start with a splash of pigment
				</h2>
				<p class="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
					Install Wash UI v{WASH_UI_VERSION}, drop Markdown into the content tree, and ship a docs
					experience that matches the gallery.
				</p>
				<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
					<a href="/docs/getting-started" class="btn btn-primary ripple cursor-pointer">
						Get started
					</a>
					<a
						href="https://wash-ui.menzies.design"
						class="btn btn-ghost cursor-pointer"
						rel="noopener noreferrer"
						target="_blank"
					>
						Component gallery
					</a>
				</div>
			</div>
		</div>
	</section>

	<footer class="px-4 py-10 text-center text-sm text-ink-muted sm:px-6">
		<div
			class="mx-auto mb-8 h-px max-w-5xl bg-gradient-to-r from-transparent via-ink-border/35 to-transparent"
			aria-hidden="true"
		></div>
		<p>
			<a href="/docs/getting-started" class="link link-hover cursor-pointer">Documentation</a>
			·
			<a
				href="https://wash-ui.menzies.design"
				class="link link-hover cursor-pointer"
				rel="noopener noreferrer"
				target="_blank">Component gallery</a
			>
			·
			<a
				href="https://github.com/menzies-mariesta-com/design-lib-menzies"
				class="link link-hover cursor-pointer"
				rel="noopener noreferrer"
				target="_blank">GitHub</a
			>
		</p>
	</footer>
</div>
