<script>
	import { base } from '$app/paths';

	/** @type {HTMLElement} */
	let heroGridEl; // Binding, if we want to play with HTML via JS later
</script>

<div class="hero-grid container" bind:this={heroGridEl}>
	<div class="div1" style="background-image: url('{base}/images/hero_lake_bg.jpg')">
		<a href="{base}/destinations" class="hero-cta" aria-label="Discover destinations">
			<p class="hero-title">Explore awesome destinations by public train and bus in Austria</p>
			<a
				class="hero-button"
				role="button"
				href="{base}/destinations"
				aria-hidden="true"
				tabindex="-1"
			>
				Take me to a lake!</a
			>
		</a>
	</div>
	<div
		class="div2"
		style="background-image: url('{base}/images/oebb_train_to_stainach_irding.jpg')"
	/>
	<div class="div3" style="background-image: url('{base}/images/traunsee.jpg')" />
</div>

<style lang="scss">
	.hero-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		min-height: 70vh;
		max-width: 1450px;

		& > * {
			border-radius: 10px;
			background-size: cover;
			background-position: center;
		}

		.div1 {
			grid-area: 1 / 1 / 7 / 5;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.div2 {
			grid-area: 1 / 5 / 4 / 7;
		}
		.div3 {
			grid-area: 4 / 5 / 7 / 7;
		}

		.hero-cta {
			cursor: pointer;
			text-decoration: none;
			background-color: rgba(255, 255, 255, 0.9);
			display: block;
			padding: 20px;
			//border-radius: 10px;
			max-width: 400px;

			p {
				color: var(--secondary);
			}
			.hero-title {
				margin-top: 20px;
				font-size: 1.4rem;
				font-weight: bold;
				text-align: center;
			}
			.hero-button {
				width: 100%;
			}
		}
	}
</style>
