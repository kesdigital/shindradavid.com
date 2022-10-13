<script lang="ts">
	import { page } from '$app/stores';

	import Hero from '$lib/sections/hero/Hero.svelte';
</script>

<svelte:head>
	<title>Shindra David | A freelance web developer based in Uganda.</title>
	<meta name="description" content="" />
	<link rel="canonical" href={$page.url.toString()} />
	<!-- twitter -->
	<meta name="twitter:site" content="@ShindraDavid" />
	<meta name="twitter:creator" content="@ShindraDavid" />
	<meta name="twitter:site" content="" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Shindra David | A freelance web developer based in Uganda." />
	<meta name="twitter:description" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:image:alt" content="" />
	<!-- open graph -->
	<meta property="og:title" content="Shindra David | A freelance web developer based in Uganda." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
	<meta property="og:image:alt" content="" />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:description" content="" />
	<meta property="og:site_name" content="Wave DJ" />
</svelte:head>

<main>
	<Hero />
</main>

<style lang="scss">
</style>
