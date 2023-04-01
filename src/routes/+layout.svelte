<script>
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	import '../scss/main.scss';
</script>

<svelte:head>
	<title>train2lake</title>
	<!-- TODO: add more SEO tags, e.g. from YOAST or SlimSEO-->
</svelte:head>

<Nav />
<main>
	<slot />
</main>
<Footer />
