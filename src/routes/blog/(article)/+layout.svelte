<script lang="ts">
	import '../../../design/syntax.scss';
</script>

<!--
  We create a layout to provide a main tag for the article page which @jsdevtools/rehype-toc will use
  to attach a table of contents, doing this in the mdsvex Article Layout will produce undesirable 
  results.
-->

<main>
	<slot />
</main>
