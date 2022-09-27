<script lang="ts">
	import HeartFill from '$lib/icons/fill/HeartFill.svelte';
	import TwitterLine from '$lib/icons/line/TwitterLine.svelte';
	import SvelteIcon from '$lib/icons/colored/SvelteIcon.svelte';
	import PhoneLine from '$lib/icons/line/PhoneLine.svelte';
	import WhatsAppLine from '$lib/icons/line/WhatsAppLine.svelte';
	import MailLine from '$lib/icons/line/MailLine.svelte';
	import GithubLine from '$lib/icons/line/GithubLine.svelte';
</script>

<footer class="footer">
	<section class="footer__top-section">
		<div>
			<p>shindra david</p>
			<p>Am a freelance web developer based in Uganda.</p>
		</div>
		<div class="get-in-touch">
			<h3>Get in touch</h3>
			<ul>
				<li>
					<a href="tel:+256702557298" title="Phone"><PhoneLine /></a>
				</li>
				<li>
					<a href="tel:+256702557298" title="WhatsApp"><WhatsAppLine /></a>
				</li>
				<li>
					<a href="https://twitter.com/ShindraDavid" title="Twitter"><TwitterLine /></a>
				</li>
				<li>
					<a href="mailto:shindradavid.dev@gmail.com" title="Email"><MailLine /></a>
				</li>
				<li>
					<a href="https://github.com/shindradavid" title="Github"><GithubLine /></a>
				</li>
			</ul>
		</div>
	</section>
	<section class="footer__bottom-section">
		<p class="copy">&copy; 2022 - {new Date().getFullYear()} | Shindra David</p>
		<p class="credit">
			Made with
			<span class="heart">
				<HeartFill />
			</span>
			and
			<span>
				<SvelteIcon />
			</span> by yours truly.
		</p>
	</section>
</footer>

<style lang="scss">
	.footer {
		@include mixins.page-padding-lr();
		text-align: center;

		@include mixins.on-laptop {
			text-align: left;
		}
		&__top-section {
			.get-in-touch {
				h3 {
					font-size: var(--fs-md);
					text-transform: uppercase;
				}
				ul {
					display: flex;
					justify-content: center;
					gap: layout.$spacing-sm;

					@include mixins.on-laptop {
						justify-content: left;
					}
					li {
						list-style: none;
						font-size: var(--fs-md);
						@include mixins.center-children;
						a {
							padding: layout.$spacing-md;
							border: 1px solid currentColor;
							line-height: 0.8;
						}
					}
				}
			}
		}
		&__bottom-section {
			@include mixins.on-laptop {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.credit {
				.heart {
					color: red;
				}
			}
		}
	}
</style>
