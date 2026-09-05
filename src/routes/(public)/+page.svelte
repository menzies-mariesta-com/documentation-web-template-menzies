<script lang="ts">
	import SiteHeader from '$lib/components/docs/SiteHeader.svelte';
	import HomePage from '$lib/components/home/HomePage.svelte';
	import { SITE_NAME, SITE_TAGLINE, buildSeo } from '$lib/util/seo';
	import { page } from '$app/state';

	const seo = buildSeo({
		title: SITE_NAME,
		description: `Documentation site powered by Menzies Design ${SITE_TAGLINE}. Pigment themes, core APIs, and a ready docs shell for any stack.`,
		url: page.url,
		path: '/',
		type: 'website',
		jsonLd: {
			'@context': 'https://schema.org',
			'@graph': [
				{
					'@type': 'WebSite',
					name: SITE_NAME,
					url: 'https://wash-ui.menzies.design',
					description: `Documentation site powered by Menzies Design ${SITE_TAGLINE}. Pigment themes, core APIs, and a ready docs shell for any stack.`
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
	<HomePage />
</main>
