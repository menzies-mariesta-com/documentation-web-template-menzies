<script lang="ts">
	let {
		variant = 'shell'
	}: {
		variant?: 'shell' | 'themes' | 'ship';
	} = $props();
</script>

{#if variant === 'shell'}
	<svg class="home-ink pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 480 360" aria-hidden="true">
		<defs>
			<filter id="ink-blur-shell" x="-30%" y="-30%" width="160%" height="160%">
				<feGaussianBlur stdDeviation="14" />
			</filter>
		</defs>
		<ellipse class="home-ink__shape home-ink__drift" cx="80" cy="70" rx="90" ry="70" fill="var(--color-primary)" opacity="0.18" filter="url(#ink-blur-shell)" />
		<ellipse class="home-ink__shape home-ink__drift" cx="400" cy="280" rx="100" ry="80" fill="var(--color-secondary)" opacity="0.16" filter="url(#ink-blur-shell)" />
		<path class="home-ink__spark" d="M60 200 C50 170 80 150 100 170 C120 190 80 230 60 200 Z" fill="var(--color-primary)" opacity="0.35" />
		<path class="home-ink__spark" d="M420 90 C410 70 430 55 445 68 C460 82 438 115 420 90 Z" fill="var(--color-accent)" opacity="0.3" />
		<circle class="home-ink__spark" cx="240" cy="40" r="6" fill="var(--color-primary)" opacity="0.4" />
		<circle class="home-ink__spark" cx="300" cy="320" r="5" fill="var(--color-secondary)" opacity="0.35" />
		<path class="home-ink__shape" d="M120 300 C180 250 280 270 340 320" fill="none" stroke="var(--color-primary)" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" />
	</svg>
{:else if variant === 'themes'}
	<svg class="home-ink pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 480 360" aria-hidden="true">
		<defs>
			<filter id="ink-blur-themes" x="-30%" y="-30%" width="160%" height="160%">
				<feGaussianBlur stdDeviation="16" />
			</filter>
		</defs>
		<ellipse class="home-ink__shape home-ink__drift" cx="100" cy="260" rx="110" ry="90" fill="var(--color-secondary)" opacity="0.2" filter="url(#ink-blur-themes)" />
		<ellipse class="home-ink__shape home-ink__drift" cx="380" cy="80" rx="95" ry="75" fill="var(--color-primary)" opacity="0.16" filter="url(#ink-blur-themes)" />
		<ellipse class="home-ink__shape home-ink__drift" cx="250" cy="180" rx="70" ry="55" fill="var(--color-accent)" opacity="0.14" filter="url(#ink-blur-themes)" />
		{#each [40, 90, 140, 200, 260, 320, 380, 430] as x, i (x)}
			<circle
				class="home-ink__spark"
				cx={x}
				cy={40 + (i % 3) * 18}
				r={4 + (i % 3)}
				fill={i % 3 === 0 ? 'var(--color-primary)' : i % 3 === 1 ? 'var(--color-secondary)' : 'var(--color-accent)'}
				opacity="0.45"
			/>
		{/each}
		<path class="home-ink__shape" d="M40 200 C120 140 200 260 280 180 C360 100 420 220 460 160" fill="none" stroke="var(--color-secondary)" stroke-opacity="0.28" stroke-width="2.5" stroke-linecap="round" />
	</svg>
{:else}
	<svg class="home-ink pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 480 360" aria-hidden="true">
		<defs>
			<filter id="ink-blur-ship" x="-30%" y="-30%" width="160%" height="160%">
				<feGaussianBlur stdDeviation="15" />
			</filter>
		</defs>
		<ellipse class="home-ink__shape home-ink__drift" cx="360" cy="90" rx="100" ry="80" fill="var(--color-accent)" opacity="0.2" filter="url(#ink-blur-ship)" />
		<ellipse class="home-ink__shape home-ink__drift" cx="90" cy="250" rx="90" ry="70" fill="var(--color-primary)" opacity="0.16" filter="url(#ink-blur-ship)" />
		<path class="home-ink__spark" d="M200 60 L208 82 L232 82 L212 96 L220 118 L200 104 L180 118 L188 96 L168 82 L192 82 Z" fill="var(--color-accent)" opacity="0.4" />
		<path class="home-ink__spark" d="M400 240 L406 256 L424 256 L410 266 L416 282 L400 272 L384 282 L390 266 L376 256 L394 256 Z" fill="var(--color-primary)" opacity="0.35" />
		<circle class="home-ink__spark" cx="140" cy="80" r="7" fill="var(--color-secondary)" opacity="0.35" />
		<path class="home-ink__shape" d="M60 140 C140 100 220 180 300 120 C380 60 440 140 470 100" fill="none" stroke="var(--color-accent)" stroke-opacity="0.26" stroke-width="2.5" stroke-linecap="round" />
	</svg>
{/if}
