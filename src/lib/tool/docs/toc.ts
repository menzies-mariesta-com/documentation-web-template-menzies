import type { TocItem } from './types';

/** Collect h2/h3 from an article root. */
export function collectToc(root: HTMLElement | null): TocItem[] {
	if (!root) return [];
	const headings = root.querySelectorAll('h2[id], h3[id]');
	const items: TocItem[] = [];
	for (const el of headings) {
		const level = el.tagName === 'H2' ? 2 : 3;
		const id = el.id;
		const text = el.textContent?.trim() ?? '';
		if (id && text) items.push({ id, text, level });
	}
	return items;
}

export function observeActiveHeading(
	root: HTMLElement | null,
	onChange: (id: string | null) => void
): () => void {
	if (!root) return () => {};
	const headings = [...root.querySelectorAll('h2[id], h3[id]')];
	if (headings.length === 0) return () => {};

	const observer = new IntersectionObserver(
		(entries) => {
			const visible = entries
				.filter((e) => e.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target.id) onChange(visible[0].target.id);
		},
		{ rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
	);

	for (const h of headings) observer.observe(h);
	return () => observer.disconnect();
}
