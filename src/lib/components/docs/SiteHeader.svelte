<script lang="ts">
	import { Search, Menu } from '@lucide/svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	let {
		onSearch,
		onMenu,
		shell = false
	}: {
		onSearch?: () => void;
		onMenu?: () => void;
		/** When true, header sits in the main column beside the sidebar (docs shell). */
		shell?: boolean;
	} = $props();

	let isMac = $state(false);

	$effect(() => {
		isMac =
			typeof navigator !== 'undefined' &&
			(/Mac|iPhone|iPad|iPod/i.test(navigator.platform) || /Mac OS X/i.test(navigator.userAgent));
	});
</script>

<header
	class="app-chrome-bar sticky top-0 z-30 border-b border-ink-border/80 bg-base-100/80 px-4 backdrop-blur-sm lg:px-6 {shell
		? ''
		: 'z-40'}"
>
	<div class="flex w-full min-w-0 items-center justify-between gap-3">
		<!-- Left: menu + title -->
		<div class="flex min-w-0 flex-row items-center gap-2 sm:gap-3">
			{#if onMenu}
				<button
					type="button"
					class="btn btn-ghost btn-square shrink-0 ripple cursor-pointer lg:hidden"
					aria-label="Open menu"
					onclick={onMenu}
				>
					<Menu class="size-5 text-base-content" strokeWidth={2} aria-hidden="true" />
				</button>
			{/if}

			{#if shell}
				<a href="/" class="flex min-w-0 flex-col leading-tight cursor-pointer">
					<span class="font-display truncate text-xl font-semibold tracking-tight lg:text-2xl">
						Menzies Design
					</span>
					<span class="label-ink hidden truncate sm:inline">Wash UI docs</span>
				</a>
			{:else}
				<a href="/" class="flex min-w-0 flex-row items-baseline gap-2 cursor-pointer">
					<span class="font-display truncate text-lg font-semibold tracking-tight sm:text-xl">
						Wash UI
					</span>
					<span class="hidden truncate text-xs text-ink-muted sm:inline">Menzies Design</span>
				</a>
			{/if}
		</div>

		<!-- Right: search + theme -->
		<div class="flex shrink-0 flex-row items-center gap-1 sm:gap-2">
			{#if onSearch}
				<button
					type="button"
					class="btn btn-ghost hidden h-10 min-h-10 w-64 justify-start gap-2 border border-ink-border bg-base-100 px-3 font-normal ripple cursor-pointer md:inline-flex lg:w-72 xl:w-80"
					aria-label="Search"
					onclick={onSearch}
				>
					<Search
						class="size-4 shrink-0 text-base-content/75"
						strokeWidth={2}
						aria-hidden="true"
					/>
					<span class="min-w-0 flex-1 truncate text-left text-sm text-base-content/60"
						>Search pages…</span
					>
					<kbd class="kbd kbd-sm shrink-0 border-ink-border bg-base-200 text-[0.65rem]"
						>{isMac ? '⌘' : 'Ctrl'}K</kbd
					>
				</button>
				<div class="tooltip tooltip-secondary tooltip-bottom md:hidden" data-tip="Search">
					<button
						type="button"
						class="btn btn-ghost btn-square ripple cursor-pointer"
						aria-label="Search"
						onclick={onSearch}
					>
						<Search class="size-5 text-base-content" strokeWidth={2} aria-hidden="true" />
					</button>
				</div>
			{/if}
			<ThemeSwitcher />
		</div>
	</div>
</header>
