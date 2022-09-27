<script lang="ts">
	import NavLink from './NavLink.svelte';

	import HomeLine from '$lib/icons/line/HomeLine.svelte';
</script>

<header>
	<a href="/">shindra david</a>
	<nav>
		<NavLink href="/" name="Home">
			<HomeLine slot="icon" />
		</NavLink>
		<NavLink href="/portfolio" name="Portfolio">
			<HomeLine slot="icon" />
		</NavLink>
		<a href="/portfolio">Portfolio</a>
		<a href="/contact">Contact</a>
		<a href="/FAQ">FAQ</a>
		<a href="/blog">Blog</a>
		<a href="/learn">Learn</a>
	</nav>
</header>
