export type DocSection = 'getting-started' | 'guide' | 'reference';

export type DocFrontmatter = {
	title: string;
	description: string;
	section: DocSection;
	order: number;
};

export type DocNavItem = DocFrontmatter & {
	slug: string;
	href: string;
};

export type DocNavGroup = {
	id: DocSection;
	label: string;
	items: DocNavItem[];
};

export type SearchEntry = {
	slug: string;
	href: string;
	title: string;
	description: string;
	section: DocSection;
	headings: string[];
};

export type TocItem = {
	id: string;
	text: string;
	level: 2 | 3;
};
