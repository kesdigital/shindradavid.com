import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				// additionalData: '@use "src/lib/styles/mixins" as *; @use "src/lib/styles/layout" as *;'
			}
		}
	}
};

export default config;
