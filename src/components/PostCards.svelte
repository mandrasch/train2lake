<script>
	import { PUBLIC_WP_REST_API_DOMAIN } from '$env/static/public';
	import { base } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	// TODO: Add full jsdoc / typescript type checking
	/** @type {Array<any>}; */
	export let posts;
</script>

<!-- TODO: How to properly implement this in a fail safe way? -->
{#if posts && posts.length > 0}
	<div class="posts">
		{#each posts as post, index (post.id)}
			<!-- 
				Too many preloads were triggered by hover,
				therefore we only use preload on tap by now
				(https://kit.svelte.dev/docs/link-options)
			 -->
			<a data-sveltekit-preload-data="tap" href={'/destinations/' + post.slug} in:fade out:fade>
				<div class="card">
					<!-- TODO: use responsive image sizes -->
					<!-- TODO: get alt text from REST API! -->
					{#if post.hasOwnProperty('_embedded') && post._embedded.hasOwnProperty('wp:featuredmedia')}
						<img
							src={post._embedded['wp:featuredmedia']['0'].source_url}
							class="card__image"
							alt=""
						/>
					{/if}
					<div class="card__content">
						<span class="card__title"> {post.title.rendered}</span>
						<p>{post.acf?.destination_teaser_text}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
{:else}
	<p>No posts yet. :(</p>
{/if}

<style lang="scss">
	// Fork of https://codepen.io/HenrikFricke/pen/GRNYrXK by HenrikFricke,
	// thanks very much for sharing this awesome example!

	// Mix in for easier media queries
	@mixin mediaBig {
		@media (min-width: 576px) {
			@content;
		}
	}

	@include mediaBig {
		:root {
			--font-size-title: 40px;
		}
	}

	.posts {
		//--font-family-primary: 'Vollkorn', serif;
		// --font-family-secondary: 'PT Sans', sans-serif;

		--font-size-title: 32px;
		--line-height-title: 1.4;
		--font-size-caption: 14px;
		--line-height-caption: 1.2;

		--color-text: #222022;
		--color-highlight-primary: #ffef7e;
		--color-highlight-secondary: #b7f9e9;
		--border-radius-primary: 10px;

		display: grid;
		grid-template-columns: repeat(1, 1fr);
		// grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;

		//min-height: 75vh;

		@include mediaBig {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	// the link element around the card
	a {
		&:hover {
			text-decoration: none;
		}
		&:focus {
			background-color: transparent !important; // remove default focus style by picocss
		}
		&:hover,
		&:focus {
			.card {
				border: 2px solid var(--primary);
			}
		}
	}

	.card {
		// max-width: 960px;
		border-radius: var(--border-radius-primary);
		box-shadow: 24px 24px 80px rgba(0, 0, 0, 0.1);
		padding: 20px 20px 28px 20px;
		box-sizing: border-box;
		margin: 20px;
		display: flex;
		flex-direction: column;
		border: 2px solid transparent;
		transition: border-color 0.6s ease-in;

		@include mediaBig {
			flex-direction: row;
			align-items: center;
			//margin: 40px;
			padding: 32px;
		}
	}

	.card__image {
		width: 100%;
		max-height: 300px;
		border-radius: var(--border-radius-primary);
		object-fit: cover;
		margin-bottom: 18px;

		@include mediaBig {
			width: 45%;
			max-height: none;
			min-height: 100px;
			margin-bottom: 0;
		}
	}

	.card__content {
		@include mediaBig {
			width: 55%;
			padding-left: 40px;
		}
		p {
			margin-top: 5px;
			color: var(--secondary);
		}
	}

	/*.card__date {
		display: block;
		font-family: var(--font-family-secondary);
		font-size: var(--font-size-caption);
		line-height: var(--line-height-caption);
		text-transform: uppercase;
		color: var(--color-text);
		margin-bottom: 6px;

		@include mediaBig {
			margin-bottom: 8px;
		}
	}*/

	.card__title {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-title);
		line-height: var(--line-height-title);
		color: var(--color-text);
		box-decoration-break: clone;
		background-image: linear-gradient(
			90deg,
			var(--color-highlight-primary),
			var(--color-highlight-secondary)
		);
		background-size: 100% 42%;
		background-repeat: no-repeat;
		background-position: 0 85%;
		padding: 0 4px;
		margin-left: -4px;
		// animation idea by https://fershad.com/
		transition: background-size 0.4s ease-in;
	}
	// animation idea by https://fershad.com/
	a:hover {
		.card__title {
			background-position: 0 105%, 0 105%;
			background-size: 100% 0.35ex, 100% 0.35ex;
		}
	}
</style>
