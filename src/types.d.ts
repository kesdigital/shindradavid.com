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
