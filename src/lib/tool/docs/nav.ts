import type { DocFrontmatter, DocNavGroup, DocNavItem, DocSection, SearchEntry } from './types';

const SECTION_ORDER: DocSection[] = ['getting-started', 'guide', 'reference'];

const SECTION_LABELS: Record<DocSection, string> = {
	'getting-started': 'Getting started',
	guide: 'Guide',
	reference: 'Reference'
};

type DocModule = {
	default: unknown;
	metadata?: Partial<DocFrontmatter>;
};

const modules = import.meta.glob<{
	default: unknown;
	metadata?: Partial<DocFrontmatter>;
}>('../../../content/docs/**/*.{md,svx}', { eager: true });

function slugFromPath(path: string): string {
	return path
		.replace(/^.*\/content\/docs\//, '')
		.replace(/\.(md|svx)$/, '')
		.replace(/\/index$/, '');
}

function toItem(path: string, mod: DocModule): DocNavItem | null {
	const meta = mod.metadata;
	if (!meta?.title || !meta.description || !meta.section || meta.order == null) {
		return null;
	}
	const slug = slugFromPath(path);
	return {
		title: meta.title,
		description: meta.description,
		section: meta.section as DocSection,
		order: meta.order,
		slug,
		href: `/docs/${slug}`
	};
}

export function getAllDocs(): DocNavItem[] {
	const items: DocNavItem[] = [];
	for (const [path, mod] of Object.entries(modules)) {
		const item = toItem(path, mod as DocModule);
		if (item) items.push(item);
	}
	return items.sort((a, b) => {
		const si = SECTION_ORDER.indexOf(a.section) - SECTION_ORDER.indexOf(b.section);
		if (si !== 0) return si;
		return a.order - b.order || a.title.localeCompare(b.title);
	});
}

export function getNavGroups(): DocNavGroup[] {
	const docs = getAllDocs();
	return SECTION_ORDER.map((id) => ({
		id,
		label: SECTION_LABELS[id],
		items: docs.filter((d) => d.section === id)
	})).filter((g) => g.items.length > 0);
}

export function getDocBySlug(slug: string): DocNavItem | undefined {
	return getAllDocs().find((d) => d.slug === slug);
}

export function getDocModule(slug: string): DocModule | undefined {
	const entry = Object.entries(modules).find(([path]) => slugFromPath(path) === slug);
	return entry ? (entry[1] as DocModule) : undefined;
}

export function getAdjacentDocs(slug: string): {
	prev: DocNavItem | null;
	next: DocNavItem | null;
} {
	const docs = getAllDocs();
	const index = docs.findIndex((d) => d.slug === slug);
	if (index < 0) return { prev: null, next: null };
	return {
		prev: index > 0 ? docs[index - 1]! : null,
		next: index < docs.length - 1 ? docs[index + 1]! : null
	};
}

export function buildSearchIndex(): SearchEntry[] {
	return getAllDocs().map((doc) => ({
		slug: doc.slug,
		href: doc.href,
		title: doc.title,
		description: doc.description,
		section: doc.section,
		headings: []
	}));
}

export { SECTION_LABELS };
