<script lang="ts">
	// svelte
	// sveltekit
	// project
	import { formatDate } from '$lib/utils/datetime';
	// 3rd party
	// icons
	// components
	// props
	export let title: string;
	export let description: string;
	export let tags: string;
	export let publishedOn: string;
	export let modifiedOn: string;
	export let sourceCodeUrl: string;
	export let liveSiteUrl: string;
	// state
	// reactive statements
	// lifecycle
</script>

<article itemscope itemtype="https://schema.org/Article" class="article">
	<h1 itemprop="name headline">{title}</h1>
	<header class="article__header">
		<h2>Dates</h2>
		<p>
			<span> Published on: </span>
			<time itemprop="datePublished" datetime={publishedOn}>{formatDate(publishedOn)}</time>
		</p>
		<p>
			<span> Last updated on: </span>
			<time itemprop="dateModified" datetime={modifiedOn}>{formatDate(modifiedOn)}</time>
		</p>
		<h2>Tags</h2>
		<ul>
			{#each tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
		<h2>Assets</h2>
		<div class="article__header__assets">
			{#if sourceCodeUrl}
				<a href={sourceCodeUrl}>Get source code</a>
			{/if}
			{#if liveSiteUrl}
				<a href={liveSiteUrl}>View live project</a>
			{/if}
		</div>
	</header>
	<section itemprop="articleBody">
		<slot />
	</section>
</article>
