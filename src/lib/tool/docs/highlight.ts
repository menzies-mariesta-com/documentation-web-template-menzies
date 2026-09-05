import { createHighlighter, type Highlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: ['github-light', 'github-dark'],
			langs: [
				'bash',
				'html',
				'css',
				'javascript',
				'typescript',
				'svelte',
				'json',
				'ini',
				'markdown',
				'tsx',
				'jsx'
			]
		});
	}
	return highlighterPromise;
}

export async function highlightCode(code: string, lang = 'text'): Promise<string> {
	const highlighter = await getHighlighter();
	const normalized = lang === 'sh' || lang === 'shell' || lang === 'zsh' ? 'bash' : lang;
	const loaded = highlighter.getLoadedLanguages();
	const language = loaded.includes(normalized as never) ? normalized : 'text';

	try {
		return highlighter.codeToHtml(code, {
			lang: language,
			themes: {
				light: 'github-light',
				dark: 'github-dark'
			},
			defaultColor: false
		});
	} catch {
		const escaped = code
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;');
		return `<pre class="shiki"><code>${escaped}</code></pre>`;
	}
}
