<script lang="ts">
	export let width: number;
	export let height: number;
	export let loading: 'lazy' | 'eager' = 'lazy';
</script>

<picture>
	<source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
	<source srcset="photo.avif" type="image/avif" />
	<source srcset="photo.webp" type="image/webp" />
	<img alt="" loading="lazy" decoding="async" width="672" height="448" src="" />
</picture>
