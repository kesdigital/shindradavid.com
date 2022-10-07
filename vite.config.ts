import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

const config: UserConfig = {
	plugins: [imagetools(), sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use "src/design/abstracts/mixins";
          @use "src/design/abstracts/variables";
        `
			}
		}
	}
};

export default config;
