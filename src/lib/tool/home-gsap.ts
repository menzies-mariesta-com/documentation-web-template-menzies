type GsapCtx = { revert: () => void };

/**
 * Client-only home page motion: splash entrance + scroll reveals.
 * Honors prefers-reduced-motion via gsap.matchMedia.
 * Never leave horizontal transforms on copy/links (alignment).
 */
export async function mountHomeMotion(root: HTMLElement): Promise<() => void> {
	const [{ gsap }, { ScrollTrigger }] = await Promise.all([
		import('gsap'),
		import('gsap/ScrollTrigger')
	]);

	gsap.registerPlugin(ScrollTrigger);

	const mm = gsap.matchMedia();
	const contexts: GsapCtx[] = [];

	mm.add('(prefers-reduced-motion: no-preference)', () => {
		const ctx = gsap.context(() => {
			const splash = gsap.timeline({ defaults: { ease: 'power3.out' } });

			splash
				.from('.home-splash__blob', {
					scale: 0.35,
					autoAlpha: 0,
					transformOrigin: '50% 50%',
					duration: 1.15,
					stagger: { each: 0.12, from: 'center' }
				})
				.from(
					'.home-splash__ripple, .home-splash__drop, .home-splash__arc',
					{
						scale: 0.2,
						autoAlpha: 0,
						transformOrigin: '50% 50%',
						duration: 0.9,
						stagger: 0.05
					},
					'-=0.7'
				)
				.from(
					'.home-hero__eyebrow, .home-hero__title, .home-hero__lede, .home-hero__cta',
					{
						y: 36,
						autoAlpha: 0,
						duration: 0.75,
						stagger: 0.1,
						clearProps: 'transform'
					},
					'-=0.55'
				)
				.from(
					'.home-hero__orb',
					{
						scale: 0,
						autoAlpha: 0,
						duration: 0.65,
						stagger: 0.06,
						ease: 'back.out(1.6)'
					},
					'-=0.4'
				);

			gsap.to('.home-splash__blob--a', {
				x: 28,
				y: -18,
				rotation: 8,
				duration: 7,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut'
			});
			gsap.to('.home-splash__blob--b', {
				x: -22,
				y: 24,
				rotation: -10,
				duration: 8.5,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut'
			});
			gsap.to('.home-splash__blob--c', {
				x: 16,
				y: 20,
				rotation: 6,
				duration: 6.5,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut'
			});
			gsap.to('.home-splash__ripple', {
				scale: 1.12,
				autoAlpha: 0.35,
				duration: 3.2,
				repeat: -1,
				yoyo: true,
				stagger: 0.35,
				ease: 'sine.inOut'
			});
			gsap.to('.home-splash__drop', {
				y: '+=18',
				duration: 2.4,
				repeat: -1,
				yoyo: true,
				stagger: 0.2,
				ease: 'sine.inOut'
			});
			gsap.to('.home-splash__arc', {
				rotation: 12,
				transformOrigin: '50% 50%',
				duration: 5,
				repeat: -1,
				yoyo: true,
				stagger: 0.4,
				ease: 'sine.inOut'
			});

			gsap.utils.toArray<HTMLElement>('.home-reveal').forEach((el) => {
				gsap.from(el, {
					y: 40,
					autoAlpha: 0,
					duration: 0.85,
					ease: 'power3.out',
					clearProps: 'transform',
					scrollTrigger: {
						trigger: el,
						start: 'top 88%',
						toggleActions: 'play none none none'
					}
				});
			});

			gsap.utils.toArray<HTMLElement>('.home-feature').forEach((section) => {
				const copy = section.querySelector('.home-feature__copy');
				const art = section.querySelector('.home-feature__art');
				const ink = section.querySelectorAll('.home-ink__shape, .home-ink__spark');

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: 'top 80%',
						toggleActions: 'play none none none'
					}
				});

				if (copy) {
					tl.from(copy, {
						y: 36,
						autoAlpha: 0,
						duration: 0.75,
						ease: 'power3.out',
						clearProps: 'transform'
					});
				}
				if (art) {
					tl.from(
						art,
						{
							y: 28,
							autoAlpha: 0,
							scale: 0.96,
							duration: 0.85,
							ease: 'power3.out',
							clearProps: 'transform'
						},
						'-=0.45'
					);
				}
				if (ink.length) {
					tl.from(
						ink,
						{
							scale: 0.4,
							autoAlpha: 0,
							duration: 0.7,
							stagger: 0.06,
							ease: 'back.out(1.4)',
							transformOrigin: '50% 50%'
						},
						'-=0.55'
					);
					gsap.to(ink, {
						y: '+=10',
						rotation: '+=6',
						duration: 4.5,
						repeat: -1,
						yoyo: true,
						stagger: 0.15,
						ease: 'sine.inOut',
						scrollTrigger: {
							trigger: section,
							start: 'top 90%',
							toggleActions: 'play pause resume pause'
						}
					});
				}
			});

			gsap.from('.home-grid__item', {
				y: 36,
				autoAlpha: 0,
				duration: 0.65,
				stagger: 0.08,
				ease: 'power2.out',
				clearProps: 'transform',
				scrollTrigger: {
					trigger: '.home-grid',
					start: 'top 82%',
					toggleActions: 'play none none none'
				}
			});

			gsap.from('.home-cta__panel', {
				y: 28,
				autoAlpha: 0,
				duration: 0.8,
				ease: 'power3.out',
				clearProps: 'transform',
				scrollTrigger: {
					trigger: '.home-cta',
					start: 'top 85%',
					toggleActions: 'play none none none'
				}
			});

			gsap.to('.home-ink__drift', {
				x: '+=24',
				y: '+=16',
				duration: 6,
				repeat: -1,
				yoyo: true,
				stagger: 0.5,
				ease: 'sine.inOut'
			});
		}, root);

		contexts.push(ctx);
		return () => ctx.revert();
	});

	mm.add('(prefers-reduced-motion: reduce)', () => {
		const ctx = gsap.context(() => {
			gsap.set(
				[
					'.home-splash__blob',
					'.home-splash__ripple',
					'.home-splash__drop',
					'.home-splash__arc',
					'.home-hero__eyebrow',
					'.home-hero__title',
					'.home-hero__lede',
					'.home-hero__cta',
					'.home-hero__orb',
					'.home-reveal',
					'.home-feature__art',
					'.home-feature__copy',
					'.home-grid__item',
					'.home-cta__panel',
					'.home-ink__shape',
					'.home-ink__spark'
				],
				{ clearProps: 'all', autoAlpha: 1 }
			);
		}, root);
		contexts.push(ctx);
		return () => ctx.revert();
	});

	return () => {
		mm.revert();
		for (const ctx of contexts) ctx.revert();
	};
}
