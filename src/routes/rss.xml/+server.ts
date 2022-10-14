import type { RequestHandler } from './$types';

import { getAllArticles } from '$lib/services/articleService';

import RSS from 'rss';

export const GET: RequestHandler = async () => {
	const articles = await getAllArticles();

	const feed = new RSS({
		title: `Shindra David's RSS Feed`,
		description: 'A web developer based in Uganda',
		site_url: 'https://shindradavid.vercel.app/',
		feed_url: 'https://shindradavid.vercel.app/rss.xml'
	});

	articles.forEach((article) =>
		feed.item({
			title: article.title,
			description: article.description,
			url: `https://shindradavid.vercel.app${article.path}`,
			date: article.publishedOn
		})
	);

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': `public, s-maxage=${60 * 60}, s-maxage=${60 * 60}`
		}
	});
};
