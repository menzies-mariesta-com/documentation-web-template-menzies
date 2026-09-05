<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { onMount, onDestroy } from 'svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import {
		initWash,
		type WashRuntime
	} from '@menzies-mariesta-com/menzies-design-wash-ui/core';
	import '@menzies-mariesta-com/menzies-design-wash-ui/styles.css';
	import { setWashRuntime } from '$lib/store/state/wash.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';

	let { children } = $props();

	let wash: WashRuntime | undefined;

	onMount(() => {
		wash = initWash({ defaultPigment: 'mineral', defaultMode: 'light' });
		setWashRuntime(wash);
	});

	onDestroy(() => {
		wash?.destroy();
		setWashRuntime(undefined);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="page-wash paper-grain min-h-dvh">
	{@render children()}
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
