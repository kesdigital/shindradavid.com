<script lang="ts">
	import SvelteIcon from '$lib/icons/colored/SvelteIcon.svelte';
	import HeartFill from '$lib/icons/fill/HeartFill.svelte';
</script>

<footer class="footer">
	<p>Copyright &copy; {new Date().getFullYear()} - Shindra David</p>
	<p class="footer__credits">
		Built with <span><HeartFill /></span> and <SvelteIcon /> by yours truly.
	</p>
</footer>

<style lang="scss">
	.footer {
		text-align: center;
		font-size: var(--fs-sm);
		@include page-lr-padding;

		&__credits {
			span {
				color: $red-600;
			}
		}
	}
</style>
