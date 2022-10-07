<script lang="ts">
	// global styles
	import '../design/global.scss';
	// components
	import Header from '$lib/sections/header/Header.svelte';
	import Footer from '$lib/sections/footer/Footer.svelte';
</script>

<Header />
<slot />
<Footer />
