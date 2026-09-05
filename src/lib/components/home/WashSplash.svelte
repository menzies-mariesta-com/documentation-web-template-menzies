<!-- Decorative watercolor splash for the home hero. -->
<svg
	class="home-splash pointer-events-none absolute inset-0 h-full w-full"
	viewBox="0 0 1200 800"
	preserveAspectRatio="xMidYMid slice"
	aria-hidden="true"
>
	<defs>
		<filter id="home-wash-blur" x="-20%" y="-20%" width="140%" height="140%">
			<feGaussianBlur in="SourceGraphic" stdDeviation="28" />
		</filter>
		<radialGradient id="home-wash-a" cx="35%" cy="30%" r="55%">
			<stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.55" />
			<stop offset="100%" stop-color="var(--color-primary)" stop-opacity="0" />
		</radialGradient>
		<radialGradient id="home-wash-b" cx="75%" cy="55%" r="50%">
			<stop offset="0%" stop-color="var(--color-secondary)" stop-opacity="0.45" />
			<stop offset="100%" stop-color="var(--color-secondary)" stop-opacity="0" />
		</radialGradient>
		<radialGradient id="home-wash-c" cx="55%" cy="75%" r="45%">
			<stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0.4" />
			<stop offset="100%" stop-color="var(--color-accent)" stop-opacity="0" />
		</radialGradient>
	</defs>

	<g filter="url(#home-wash-blur)">
		<ellipse
			class="home-splash__blob home-splash__blob--a"
			cx="360"
			cy="260"
			rx="280"
			ry="220"
			fill="url(#home-wash-a)"
		/>
		<ellipse
			class="home-splash__blob home-splash__blob--b"
			cx="860"
			cy="420"
			rx="260"
			ry="210"
			fill="url(#home-wash-b)"
		/>
		<ellipse
			class="home-splash__blob home-splash__blob--c"
			cx="620"
			cy="560"
			rx="240"
			ry="180"
			fill="url(#home-wash-c)"
		/>
	</g>

	<!-- Extra ink drops + arcs for splash energy -->
	<path
		class="home-splash__drop"
		d="M180 160 C170 130 190 100 210 120 C230 140 200 190 180 160 Z"
		fill="var(--color-primary)"
		opacity="0.35"
	/>
	<path
		class="home-splash__drop"
		d="M980 220 C970 195 990 170 1010 185 C1028 200 1000 250 980 220 Z"
		fill="var(--color-secondary)"
		opacity="0.32"
	/>
	<path
		class="home-splash__drop"
		d="M720 120 C712 100 728 82 742 96 C756 110 736 145 720 120 Z"
		fill="var(--color-accent)"
		opacity="0.3"
	/>
	<path
		class="home-splash__drop"
		d="M140 520 C128 490 155 460 178 482 C198 502 165 555 140 520 Z"
		fill="var(--color-primary)"
		opacity="0.22"
	/>

	<path
		class="home-splash__arc"
		d="M240 340 C320 280 420 300 480 360"
		fill="none"
		stroke="var(--color-primary)"
		stroke-opacity="0.28"
		stroke-width="3"
		stroke-linecap="round"
	/>
	<path
		class="home-splash__arc"
		d="M700 240 C780 200 880 230 940 300"
		fill="none"
		stroke="var(--color-secondary)"
		stroke-opacity="0.24"
		stroke-width="3"
		stroke-linecap="round"
	/>
	<path
		class="home-splash__arc"
		d="M480 620 C560 560 680 580 760 640"
		fill="none"
		stroke="var(--color-accent)"
		stroke-opacity="0.22"
		stroke-width="3"
		stroke-linecap="round"
	/>

	<circle
		class="home-splash__ripple"
		cx="420"
		cy="300"
		r="90"
		fill="none"
		stroke="var(--color-primary)"
		stroke-opacity="0.28"
		stroke-width="2"
	/>
	<circle
		class="home-splash__ripple"
		cx="780"
		cy="380"
		r="70"
		fill="none"
		stroke="var(--color-secondary)"
		stroke-opacity="0.25"
		stroke-width="2"
	/>
	<circle
		class="home-splash__ripple"
		cx="560"
		cy="520"
		r="110"
		fill="none"
		stroke="var(--color-accent)"
		stroke-opacity="0.22"
		stroke-width="2"
	/>
	<circle
		class="home-splash__ripple"
		cx="200"
		cy="480"
		r="48"
		fill="none"
		stroke="var(--color-primary)"
		stroke-opacity="0.2"
		stroke-width="2"
	/>
	<circle
		class="home-splash__ripple"
		cx="1020"
		cy="520"
		r="56"
		fill="none"
		stroke="var(--color-secondary)"
		stroke-opacity="0.2"
		stroke-width="2"
	/>
</svg>
