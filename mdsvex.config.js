import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import toc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = defineConfig({
	extensions: ['.md'],
	layout: {
		article: 'src/lib/layouts/article/Article.svelte'
		// lesson: 'src/lib/layouts/Lesson.svelte',
	},
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [
		rehypeSlug,
		[
			toc,
			{
				headings: ['h2', 'h3'],
				position: 'beforeend',
				customizeTOC: function (toc) {
					const tocHeading = {
						type: 'element',
						tagName: 'h2',
						properties: { className: 'toc__heading', id: 'toc-heading' },
						children: [{ type: 'text', value: 'Table of contents' }]
					};
					toc.properties.ariaLabelledby = 'toc-heading';
					toc.children.unshift(tocHeading);
					const aside = {
						type: 'element',
						tagName: 'aside',
						properties: { className: 'left-sidebar' },
						children: [toc]
					};
					return aside;
				}
			}
		],
		[rehypeAutolinkHeadings, { behavior: 'append' }]
	]
});

export default config;
