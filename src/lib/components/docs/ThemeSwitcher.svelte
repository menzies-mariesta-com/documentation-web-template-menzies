<script lang="ts">
	import {
		watercolorThemes,
		type ThemeMode,
		type WatercolorThemeId
	} from '@menzies-mariesta-com/menzies-design-wash-ui/core';
	import { getWashRuntime } from '$lib/store/state/wash.svelte';
	import { Moon, Palette, Sun } from '@lucide/svelte';

	let pigment = $state<WatercolorThemeId>('mineral');
	let mode = $state<ThemeMode>('light');
	let paletteOpen = $state(false);
	let menuRoot = $state<HTMLDivElement | null>(null);

	$effect(() => {
		const wash = getWashRuntime();
		if (!wash) return;
		pigment = wash.getPigment();
		mode = wash.getMode();

		function onTheme(event: Event) {
			const detail = (event as CustomEvent<{ pigment: WatercolorThemeId; mode: ThemeMode }>)
				.detail;
			if (!detail) return;
			pigment = detail.pigment;
			mode = detail.mode;
		}

		window.addEventListener('design-web-menzies-theme-change', onTheme);
		return () => window.removeEventListener('design-web-menzies-theme-change', onTheme);
	});

	function toggleMode() {
		const wash = getWashRuntime();
		const next: ThemeMode = mode === 'light' ? 'dark' : 'light';
		wash?.setMode(next);
		mode = next;
	}

	function setPigment(id: WatercolorThemeId) {
		const wash = getWashRuntime();
		wash?.setPigment(id);
		pigment = id;
		paletteOpen = false;
	}

	function onDocClick(e: MouseEvent) {
		if (!paletteOpen || !menuRoot) return;
		if (!menuRoot.contains(e.target as Node)) paletteOpen = false;
	}

	function onKey(e: KeyboardEvent) {
		if (e.key === 'Escape' && paletteOpen) paletteOpen = false;
	}
</script>

<svelte:document onclick={onDocClick} onkeydown={onKey} />

<div class="flex items-center gap-1">
	<div
		class="tooltip tooltip-secondary tooltip-bottom"
		data-tip={mode === 'light' ? 'Dark mode' : 'Light mode'}
	>
		<button
			type="button"
			class="btn btn-ghost btn-square btn-sm btn-secondary cursor-pointer"
			aria-label={mode === 'light' ? 'Dark mode' : 'Light mode'}
			onclick={toggleMode}
		>
			{#if mode === 'light'}
				<Moon class="size-4" aria-hidden="true" />
			{:else}
				<Sun class="size-4" aria-hidden="true" />
			{/if}
		</button>
	</div>

	<div class="relative" bind:this={menuRoot}>
		<div class="tooltip tooltip-secondary tooltip-bottom" data-tip="Pigment">
			<button
				type="button"
				class="btn btn-ghost btn-square btn-sm btn-secondary cursor-pointer"
				aria-label="Pigment"
				aria-expanded={paletteOpen}
				aria-haspopup="listbox"
				onclick={() => (paletteOpen = !paletteOpen)}
			>
				<Palette class="size-4" aria-hidden="true" />
			</button>
		</div>
		{#if paletteOpen}
			<ul
				class="menu menu-sm absolute end-0 z-50 mt-2 max-h-72 w-72 max-w-[min(100vw-1rem,18rem)] overflow-x-hidden overflow-y-auto overscroll-contain rounded-box border border-ink-border bg-base-100 p-2 shadow-lg"
				role="listbox"
				aria-label="Pigments"
			>
				{#each watercolorThemes as theme (theme.id)}
					<li class="w-full">
						<button
							type="button"
							class="flex w-full min-w-0 cursor-pointer items-center gap-2 {theme.id === pigment
								? 'bg-primary/40'
								: ''}"
							role="option"
							aria-selected={theme.id === pigment}
							onclick={() => setPigment(theme.id)}
						>
							<span
								class="size-3 shrink-0 rounded-full border border-ink-border"
								style:background={theme.swatch}
								aria-hidden="true"
							></span>
							<span class="flex min-w-0 flex-1 flex-col items-start gap-0 overflow-hidden">
								<span class="w-full truncate leading-tight">{theme.label}</span>
								<span class="w-full truncate text-[10px] text-ink-muted">{theme.note}</span>
							</span>
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
