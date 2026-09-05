<script lang="ts">
	import type { TocItem } from '$lib/tool/docs/types';

	let {
		items,
		activeId
	}: {
		items: TocItem[];
		activeId: string | null;
	} = $props();
</script>

{#if items.length > 0}
	<nav class="sticky top-24" aria-label="On this page">
		<p class="mb-3 text-xs font-semibold tracking-wide text-ink-muted uppercase">On this page</p>
		<ul class="space-y-1.5 text-sm">
			{#each items as item (item.id)}
				<li class={item.level === 3 ? 'ps-3' : ''}>
					<a
						href={`#${item.id}`}
						class="block cursor-pointer rounded-btn px-2 py-1 transition-colors hover:bg-primary/20 hover:text-base-content {activeId ===
						item.id
							? 'bg-primary/30 font-medium text-base-content'
							: 'text-ink-muted'}"
					>
						{item.text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
