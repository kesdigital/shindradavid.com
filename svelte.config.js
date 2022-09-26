import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import mdsvexConfig from './mdsvex.config.js';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			postcss: {
				plugins: [autoprefixer]
			},
			scss: {
				// prependData: '@use "src/lib/styles/mixins" as *; @use "src/lib/styles/layout" as *;'
			}
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
