import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

const config: UserConfig = {
	plugins: [imagetools(), sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData:
					'@use "src/lib/design/abstracts/mixins"; @use "src/lib/design/abstracts/layout";'
			}
		}
	}
};

export default config;
