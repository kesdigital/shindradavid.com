<script lang="ts">
	// global styles
	import '../design/global.scss';
	// components
	import Header from '$lib/sections/header/Header.svelte';
	import Footer from '$lib/sections/footer/Footer.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="#16181d" />
</svelte:head>

<Header />
<slot />
<Footer />
