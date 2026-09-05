<script lang="ts">
	import SiteHeader from '$lib/components/docs/SiteHeader.svelte';
	import { WASH_UI_VERSION } from '@menzies-mariesta-com/menzies-design-wash-ui/core';
	import { buildSeo } from '$lib/util/seo';
	import { page } from '$app/state';

	const seo = buildSeo({
		title: 'Wash UI',
		description:
			'Menzies Design Wash UI documentation. Pigment themes, core APIs, and framework guides for any stack.',
		url: page.url,
		path: '/',
		type: 'website',
		jsonLd: {
			'@context': 'https://schema.org',
			'@graph': [
				{
					'@type': 'WebSite',
					name: 'Wash UI',
					url: 'https://wash-ui.menzies.design',
					description:
						'Menzies Design Wash UI documentation. Pigment themes, core APIs, and framework guides for any stack.'
				},
				{
					'@type': 'Organization',
					name: 'Menzies Design',
					url: 'https://menzies.design'
				}
			]
		}
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<link rel="canonical" href={seo.canonical} />
	<meta property="og:title" content={seo.ogTitle} />
	<meta property="og:description" content={seo.ogDescription} />
	<meta property="og:url" content={seo.ogUrl} />
	<meta property="og:type" content={seo.ogType} />
	<meta property="og:image" content={seo.ogImage} />
	<meta property="og:site_name" content={seo.ogSiteName} />
	<meta name="twitter:card" content={seo.twitterCard} />
	<meta name="twitter:image" content={seo.twitterImage} />
	<meta name="twitter:title" content={seo.ogTitle} />
	<meta name="twitter:description" content={seo.ogDescription} />
	{@html `<script type="application/ld+json">${seo.jsonLd}</script>`}
</svelte:head>

<SiteHeader />

<main>
	<section
		class="relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center overflow-hidden px-4 py-16 sm:px-6"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_oklab,var(--color-primary)_22%,transparent),transparent_55%),radial-gradient(ellipse_at_80%_70%,color-mix(in_oklab,var(--color-secondary)_18%,transparent),transparent_50%)]"
			aria-hidden="true"
		></div>

		<div class="relative mx-auto w-full max-w-3xl">
			<p class="font-display text-sm font-medium tracking-wide text-primary">
				Menzies Design · v{WASH_UI_VERSION}
			</p>
			<h1 class="font-display mt-3 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
				Wash UI
			</h1>
			<p class="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
				Watercolor pigments, daisyUI utilities, and framework-free core APIs for product interfaces.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-3">
				<a href="/docs/getting-started" class="btn btn-primary ripple cursor-pointer">
					Get started
				</a>
				<a href="/docs/theming" class="btn btn-ghost cursor-pointer"> Theming </a>
			</div>
		</div>
	</section>

	<section class="border-t border-ink-border/60 px-4 py-16 sm:px-6">
		<div class="mx-auto grid max-w-3xl gap-10 sm:grid-cols-3">
			<div>
				<h2 class="font-display text-lg font-semibold">Any framework</h2>
				<p class="mt-2 text-sm leading-relaxed text-ink-muted">
					Import <code class="text-xs">styles.css</code> and
					<code class="text-xs">initWash</code> from
					<code class="text-xs">/core</code>. Optional React adapters when you need them.
				</p>
			</div>
			<div>
				<h2 class="font-display text-lg font-semibold">Thirty pigments</h2>
				<p class="mt-2 text-sm leading-relaxed text-ink-muted">
					Mineral through ink, light and dark paper modes, persisted for returning visitors.
				</p>
			</div>
			<div>
				<h2 class="font-display text-lg font-semibold">Studio recipes</h2>
				<p class="mt-2 text-sm leading-relaxed text-ink-muted">
					Shells, panels, tables, ripples, and smart tooltips with stable
					<code class="text-xs">washRecipes</code>.
				</p>
			</div>
		</div>
	</section>

	<footer class="border-t border-ink-border/60 px-4 py-8 text-center text-sm text-ink-muted sm:px-6">
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
</main>
