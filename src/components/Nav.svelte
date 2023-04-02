<script>
	import { base } from '$app/paths';

	// Simple SvelteKit Loading Spinner, thx to https://stackoverflow.com/a/70417253
	import { navigating } from '$app/stores';
	import { Jumper } from 'svelte-loading-spinners';

	// TODO: add active menu styles
</script>

<div class="fixed-nav">
	<nav class="container">
		<ul>
			<li><a href="{base}/"><strong>train2lake</strong></a></li>
		</ul>
		<div class="loading-spinner">
			{#if $navigating}
				<Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
			{/if}
		</div>
		<ul>
			<li><a href="{base}/destinations">Discover</a></li>
			<li><a href="{base}/about">About</a></li>
		</ul>
	</nav>
</div>

<style lang="scss">
	.fixed-nav {
		height: 3.5rem;
		width: 100%;
		position: fixed;
		z-index: 99;
		margin: 0 auto;
		top: 0px;
		background-color: white;
		backdrop-filter: saturate(180%) blur(20px);
		background-color: rgba(255, 255, 255, 0.7);
		box-shadow: 0 1px 0 rgba(115, 130, 140, 0.2);
	}
	nav.container {
	}
</style>
