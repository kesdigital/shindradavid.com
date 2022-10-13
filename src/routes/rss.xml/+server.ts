import type { RequestHandler } from './$types';

import RSS from 'rss';

export const GET: RequestHandler = async () => {
	// const posts = await getPostsData()

	const feed = new RSS({
		title: `Shindra David's RSS Feed`,
		description: 'A web developer based in Uganda',
		site_url: 'https://shindradavid.vercel.app/',
		feed_url: 'https://shindradavid.vercel.app/rss.xml'
	});

	// posts.forEach((post) =>
	// 	feed.item({
	// 		title: post.title,
	// 		description: post.description,
	// 		url: `${siteUrl}${post.slug}`,
	// 		date: post.published,
	// 	})
	// )

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': `public, s-maxage=${60 * 60}, s-maxage=${60 * 60}`
		}
	});
};
