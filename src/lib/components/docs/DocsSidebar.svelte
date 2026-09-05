<script lang="ts">
	import type { Component } from 'svelte';
	import type { DocNavGroup, DocSection } from '$lib/tool/docs/types';
	import {
		BookOpen,
		Palette,
		SwatchBook,
		Settings2,
		Code2,
		Shapes,
		ChartLine,
		Bot,
		Rocket
	} from '@lucide/svelte';

	let {
		groups,
		currentSlug,
		onNavigate
	}: {
		groups: DocNavGroup[];
		currentSlug: string;
		onNavigate?: () => void;
	} = $props();

	const sectionIcons: Record<DocSection, Component> = {
		'getting-started': BookOpen,
		guide: Palette,
		reference: Code2
	};

	const pageIcons: Record<string, Component> = {
		'getting-started': BookOpen,
		sveltekit: Rocket,
		theming: Palette,
		tokens: SwatchBook,
		customize: Settings2,
		'core-api': Code2,
		icons: Shapes,
		charts: ChartLine,
		mcp: Bot
	};

	let openBySection = $state<Record<string, boolean>>({});

	function isOpen(id: string) {
		return openBySection[id] ?? true;
	}
</script>

{#each groups as group (group.id)}
	{@const SectionIcon = sectionIcons[group.id]}
	{@const hasActive = group.items.some((item) => item.slug === currentSlug)}
	<li>
		<details
			class="group"
			open={isOpen(group.id)}
			ontoggle={(e) => {
				openBySection = { ...openBySection, [group.id]: e.currentTarget.open };
			}}
		>
			<summary class="cursor-pointer font-medium {hasActive ? 'text-primary' : ''}">
				<SectionIcon class="size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
				<span class="flex-1 truncate">{group.label}</span>
			</summary>
			<ul class="ms-3 mt-0.5 space-y-0.5 border-s border-ink-border/60 py-1 ps-3 pe-1">
				{#each group.items as item (item.slug)}
					{@const ItemIcon = pageIcons[item.slug] ?? BookOpen}
					{@const active = item.slug === currentSlug}
					<li>
						<a
							href={item.href}
							class="ripple cursor-pointer py-2 text-sm {active ? 'menu-wash-active' : ''}"
							aria-current={active ? 'page' : undefined}
							onclick={() => onNavigate?.()}
						>
							<ItemIcon class="size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
							<span class="truncate">{item.title}</span>
						</a>
					</li>
				{/each}
			</ul>
		</details>
	</li>
{/each}
