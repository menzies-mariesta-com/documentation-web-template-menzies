<script lang="ts">
	import DocsSidebar from '$lib/components/docs/DocsSidebar.svelte';
	import DocsSearch from '$lib/components/docs/DocsSearch.svelte';
	import SiteHeader from '$lib/components/docs/SiteHeader.svelte';
	import { washUiBrandText } from '@menzies-mariesta-com/menzies-design-wash-ui/core';
	import { page } from '$app/state';

	let { data, children } = $props();

	let searchOpen = $state(false);
	let drawerOpen = $state(false);

	const currentSlug = $derived(
		page.url.pathname.replace(/^\/docs\/?/, '').replace(/\/$/, '') || 'getting-started'
	);
	const brand = washUiBrandText();

	$effect(() => {
		page.url.pathname;
		drawerOpen = false;
	});
</script>

<DocsSearch entries={data.searchIndex} bind:open={searchOpen} />

<!-- WashShell-style drawer: sidebar chrome + main header share the same top row on lg -->
<div class="drawer lg:drawer-open">
	<input id="docs-drawer" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen} />

	<div class="drawer-content flex min-h-dvh flex-col">
		<SiteHeader
			shell
			onSearch={() => (searchOpen = true)}
			onMenu={() => (drawerOpen = true)}
		/>
		<div class="min-w-0 flex-1">
			{@render children()}
		</div>
	</div>

	<div class="drawer-side z-40">
		<label for="docs-drawer" class="drawer-overlay cursor-pointer" aria-label="Close sidebar"
		></label>
		<aside
			class="flex min-h-full w-[280px] flex-col border-r border-ink-border bg-base-100 paper-grain"
		>
			<div class="app-chrome-bar border-b border-ink-border/80 px-5">
				<div class="flex min-w-0 flex-col leading-tight">
					<p class="font-display text-xl font-semibold tracking-tight lg:text-2xl">
						Menzies Design
					</p>
					<p class="label-ink mt-0.5">{brand}</p>
				</div>
			</div>
			<ul class="menu w-full flex-1 gap-1 overflow-y-auto scroll-smooth px-4 py-4">
				<DocsSidebar
					groups={data.navGroups}
					{currentSlug}
					onNavigate={() => (drawerOpen = false)}
				/>
			</ul>
		</aside>
	</div>
</div>
