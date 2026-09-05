<script lang="ts">
	import { Info, TriangleAlert, Lightbulb } from '@lucide/svelte';

	let {
		type = 'note',
		title,
		children
	}: {
		type?: 'note' | 'warning' | 'tip';
		title?: string;
		children: import('svelte').Snippet;
	} = $props();

	const cfg = $derived.by(() => {
		if (type === 'warning') {
			return { alert: 'alert-warning', label: title ?? 'Warning', Icon: TriangleAlert };
		}
		if (type === 'tip') {
			return { alert: 'alert-success', label: title ?? 'Tip', Icon: Lightbulb };
		}
		return { alert: 'alert-info', label: title ?? 'Note', Icon: Info };
	});
</script>

<div class={`alert ${cfg.alert} my-6 shadow-sm`} role="note">
	<cfg.Icon class="size-5 shrink-0" aria-hidden="true" />
	<div class="space-y-1">
		<p class="font-semibold">{cfg.label}</p>
		<div class="text-sm leading-relaxed [&_a]:link [&_p]:m-0">
			{@render children()}
		</div>
	</div>
</div>
