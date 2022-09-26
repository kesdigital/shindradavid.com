import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
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
