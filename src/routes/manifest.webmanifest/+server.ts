import type { RequestHandler } from './$types';

import { json } from '@sveltejs/kit';

export const GET: RequestHandler = ({ setHeaders }) => {
	const manifest = {
		name: 'Shindra David',
		short_name: 'shindra david',
		description: '',
		start_url: '/',
		background_color: '',
		theme_color: '',
		display: 'standalone',
		icons: [
			{ src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
			{ src: '/icon-512.png', type: 'image/png', sizes: '512x512' }
		]
	};

	setHeaders({
		'content-type': 'application/json'
	});

	return json(manifest);
};
