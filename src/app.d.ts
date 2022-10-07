// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface SeoMetadata {
	title: string;
	description: string;
	twitter?: {
		title: string;
		description: string;
		type: 'summary' | 'summary_large_image';
		image: string;
		imageAlt: string;
	};
	openGraph?: {};
}

interface ArticleMetadata {
	title: string;
	description: string;
	publishedOn: string;
	tags: string[];
}

interface Article extends ArticleMetadata {
	path: string;
}
