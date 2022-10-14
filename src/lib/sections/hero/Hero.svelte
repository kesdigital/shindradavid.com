<script lang="ts"></script>

<section class="hero">
	<div class="hero__copy">
		<h1>Get a website tailored for your business and delight your customers and drive sales.</h1>
		<div>
			<p>Hi, I'm Shindra David, a self taught freelance web developer based in Uganda</p>
			<a href="/contact">Contact me</a>
		</div>
		<div class="hero__portfolio" />
	</div>
</section>

<style lang="scss">
	.hero {
		--txt-primary: #{$gray-900};
		--txt-secondary: #{$gray-800};
		--txt-btn: #{$gray-50};
		--bg-btn: #{$gray-900};
		background-color: var(--accent-color);
		padding: {
			top: $spacing-xl;
			bottom: $spacing-xl;
		}
		@include page-lr-padding;

		&__copy {
			display: flex;
			flex-direction: column;
			gap: $spacing-lg;

			@include screen-lg {
				flex-direction: row;
			}

			h1 {
				font-size: var(--fs-xl);
				font-weight: 700;
				flex-shrink: 1;
			}

			div {
				flex-shrink: 1;
				p {
					color: var(--txt-primary);
				}

				a {
					display: inline-block;
					margin-top: $spacing-md;
					@include btn-primary;
				}
			}
		}
	}
</style>
