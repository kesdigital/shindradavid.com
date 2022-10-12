<script lang="ts">
	// svelte
	// sveltekit
	import { page } from '$app/stores';
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

<svelte:head>
	<title>Shindra David | A freelance web developer based in Uganda.</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={$page.url.toString()} />
	<!-- twitter -->
	<meta name="twitter:site" content="@ShindraDavid" />
	<meta name="twitter:creator" content="@ShindraDavid" />
	<meta name="twitter:site" content="" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Shindra David | A freelance web developer based in Uganda." />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="" />
	<meta name="twitter:image:alt" content="" />
	<!-- open graph -->
	<meta property="og:title" content="Shindra David | A freelance web developer based in Uganda." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
	<meta property="og:image:alt" content="" />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Wave DJ" />
</svelte:head>

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
				<li class="tag tag-{tag}">#{tag}</li>
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
