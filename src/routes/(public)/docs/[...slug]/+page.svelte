<script lang="ts">
	import DocsBreadcrumbs from '$lib/components/docs/DocsBreadcrumbs.svelte';
	import DocsToc from '$lib/components/docs/DocsToc.svelte';
	import DocsPrevNext from '$lib/components/docs/DocsPrevNext.svelte';
	import CodeCopyEnhance from '$lib/components/docs/CodeCopyEnhance.svelte';
	import { getDocModule } from '$lib/tool/docs/nav';
	import { collectToc, observeActiveHeading } from '$lib/tool/docs/toc';
	import { buildSeo } from '$lib/util/seo';
	import { page } from '$app/state';
	import type { TocItem } from '$lib/tool/docs/types';

	let { data } = $props();

	const Doc = $derived(getDocModule(data.slug)?.default as typeof import('svelte').SvelteComponent | undefined);

	let articleEl = $state<HTMLElement | null>(null);
	let tocItems = $state<TocItem[]>([]);
	let activeId = $state<string | null>(null);
	/** While set, scroll-spy must not overwrite a TOC click selection. */
	let pinnedId = $state<string | null>(null);
	let pinTimer: ReturnType<typeof setTimeout> | undefined;

	function selectTocHeading(id: string) {
		activeId = id;
		pinnedId = id;
		if (pinTimer) clearTimeout(pinTimer);
		pinTimer = setTimeout(() => {
			pinnedId = null;
		}, 900);
	}

	$effect(() => {
		data.slug;
		queueMicrotask(() => {
			tocItems = collectToc(articleEl);
		});
	});

	$effect(() => {
		data.slug;
		pinnedId = null;
		if (pinTimer) clearTimeout(pinTimer);
		return observeActiveHeading(articleEl, (id) => {
			if (pinnedId) return;
			activeId = id;
		});
	});

	const seo = $derived(
		buildSeo({
			title: data.doc.title,
			description: data.doc.description,
			url: page.url,
			path: data.doc.href,
			type: 'article'
		})
	);

	const crumbs = $derived([
		{ href: '/', label: 'Home' },
		{ href: '/docs/getting-started', label: 'Docs' },
		{ href: data.doc.href, label: data.doc.title }
	]);
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

<div class="flex w-full">
	<div class="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:px-10">
		<DocsBreadcrumbs items={crumbs} />
		<p class="mt-4 text-xs font-semibold tracking-wide text-primary uppercase">
			{data.sectionLabel}
		</p>

		<article class="docs-prose mt-2" bind:this={articleEl}>
			{#if Doc}
				<Doc />
			{/if}
		</article>

		<CodeCopyEnhance root={articleEl} />
		<DocsPrevNext prev={data.prev} next={data.next} />
	</div>

	<aside
		class="sticky top-16 hidden h-[calc(100dvh-4rem)] w-56 shrink-0 overflow-y-auto scroll-smooth pt-3 pb-6 pe-5 xl:block"
	>
		<DocsToc items={tocItems} {activeId} onSelect={selectTocHeading} />
	</aside>
</div>
