import type { RequestHandler } from './$types';
import { getAllDocs } from '$lib/tool/docs/nav';
import { siteOrigin } from '$lib/util/seo';

export const prerender = true;

export const GET: RequestHandler = ({ url }) => {
	const origin = siteOrigin(url);
	const urls = ['/', ...getAllDocs().map((d) => d.href)];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(path) => `  <url>
    <loc>${origin}${path}</loc>
    <changefreq>weekly</changefreq>
  </url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
