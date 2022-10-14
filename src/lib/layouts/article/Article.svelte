<script>
	//@ts-nocheck

	// We disable type checking because of bug in mdsvex that prevents it from parsing
	// typescript and scss components
	// We also wrap it in wrapper component so we can use sass and ts there

	// svelte
	// sveltekit
	// project
	// 3rd party
	// icons
	// components
	import ArticleWrapper from './ArticleWrapper.svelte';
	// props
	/**@type {string}*/
	export let title;
	/**@type {string}*/
	export let description;
	/**@type {string[]}*/
	export let tags;
	/**@type {string}*/
	export let publishedOn;
	/**@type {string}*/
	export let modifiedOn;
	/**@type {?string}*/
	export let sourceCodeUrl;
	/**@type {?string}*/
	export let liveSiteUrl;
	/**@type {?string}*/
	export let readingTime;
	// state
	// reactive statements
	// lifecycle
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="author" content="Shindra David" />
	<meta name="description" content={description} />
	<meta name="keywords" content={tags.join(', ')} />
	<!-- twitter card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@ShindraDavid" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="" />
	<meta name="twitter:image:alt" content="" />
	<!-- open graph tags -->
	<meta name="og:locale" content="en_US" />
	<meta name="og:type" content="article" />
	<meta name="og:site_name" content="shindradavid.com" />
	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta name="og:image" content="" />
	<meta name="og:image:alt" content="" />
</svelte:head>

<ArticleWrapper
	{title}
	{description}
	{publishedOn}
	{modifiedOn}
	{tags}
	{liveSiteUrl}
	{sourceCodeUrl}
	{readingTime}
>
	<slot />
</ArticleWrapper>
