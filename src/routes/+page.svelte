<script>
	import { base } from '$app/paths';
	import PostCards from '../components/PostCards.svelte';
	/** @type {import('./$types').PageData} */
	export let data; // from server side
	console.log(data.posts);
</script>

<svelte:head>
	<title>train2lake</title>
	<!-- TODO: add meta desc -->
</svelte:head>

<div class="container" style="margin-top:50px;">
	<p class="hero-title">Explore great destinations by public trains and busses in Austria!</p>

	<PostCards posts={data.posts} />
</div>

<style lang="scss">
	.hero-title{
		font-size: 1.5rem;
		font-weight:bold;
	}
</style>
