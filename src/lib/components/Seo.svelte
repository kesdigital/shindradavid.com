<script lang="ts">
	export let seoMetadata: SeoMetadata;
</script>

<svelte:head>
	<title>{seoMetadata.title}</title>
	<meta name="description" content={seoMetadata.description} />
	<link rel="canonical" href="" />
	<meta name="theme-color" content="" />
	<link rel="manifest" href="/manifest.json" />
	<!-- twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@fireship_dev" />
	<meta name="twitter:title" content="Fireship.io" />
	<meta name="twitter:description" content="" />
	<meta name="twitter:image" content="" />
	<!-- opengraph -->
	<meta property="og:title" content="Fireship.io" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://fireship.io/" />
	<meta property="og:image" content="https://fireship.io/img/covers/default.png" />
	<meta property="og:description" content="" />
</svelte:head>
