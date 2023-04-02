<script>
	import { base } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import HeroGrid from '../components/HeroGrid.svelte';


</script>

<HeroGrid></HeroGrid>




<style lang="scss">
	
	.image-container {
		max-width: 1325px;
		margin: 115px auto 0px auto;
		position: relative;
		//height: calc(100vh - 3.5rem);
		height: calc(80vh - 3.5rem);
		background-size: cover;
		background-position: right;
		border: 2px solid var(--secondary);

		@media screen and (prefers-reduced-motion: no-preference) {
			// TODO: Check browser support
			transition: background-image 1.5s ease-out;
		}
	}
	/*.hero-cta {
		position: absolute;
		right: 8%;
		bottom: 8%;
		padding: 20px;
		background: white;
		text-align: right;
		background-color: rgba(255, 255, 255, 0.85);
		max-width: 350px;
		border: 3px solid transparent;

		&:hover {
			text-decoration: none;
		}
		&:focus {
			border: 3px solid var(--primary);
		}
	}*/
</style>
