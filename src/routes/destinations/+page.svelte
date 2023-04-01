<script>
	// page is as well a store which can be used to update the page.url.searchParams
	// (see https://www.youtube.com/watch?v=n00qRGPfyCc)
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	// Simple SvelteKit Loading Spinner, thx to https://stackoverflow.com/a/70417253
	import { navigating } from '$app/stores';

	import PostCards from '../../components/PostCards.svelte';
	import PostPagination from '../../components/PostPagination.svelte';
	/** @type {import('./$types').PageData} */
	export let data; // from server side

	// Convert for type safety reasons by now
	/** @type {import('$lib/types').paginationData} */
	let paginationData;
	$: {
		if (data.pagination !== undefined && data.pagination !== null) {
			paginationData = data.pagination;
		}
	}

	/**
	 * @param key {string}
	 * @param value {string | number}
	 */
	const updateSearchParams = (key, value) => {
		const searchParams = new URLSearchParams($page.url.searchParams);
		searchParams.set(key, '' + value);
		// https://kit.svelte.dev/docs/state-management#storing-state-in-the-url
		// https://kit.svelte.dev/docs/modules#$app-navigation-goto
		goto(`?${searchParams.toString()}`);
	};

	// Receive events from child components
	// https://svelte.dev/tutorial/component-events
    // (https://www.donielsmith.com/blog/2020-04-21-props-vs-event-dispatcher-svelte-3/)
	// TODO: add correct type, couldn't find it directly
	// @ts-ignore
	function handlePaginationMessage(event) {
		if (
			event.detail.hasOwnProperty('newPageToNavigate') &&
			!Number.isNaN(parseInt(event.detail.newPageToNavigate))
		) {
			updateSearchParams('page', event.detail.newPageToNavigate);
		} else {
			console.error('No new page given from child component');
		}
	}
</script>

<div class="container" style="margin-top:50px;">

    <!-- TODO: Show loading spinner? -->
	{#if $navigating}
		Lade Daten ...
	{/if}

    <!-- TODO: Move to own component -->

    <select aria-label="Federal State">
        <option>All</option>
        <option>Kärnten</option>
    </select>

    <input type="search" aria-label="Search">

    <button>Random</button>

	<PostCards posts={data.posts} />

	<PostPagination {paginationData} on:message={handlePaginationMessage} />
</div>

<style lang="scss">
	.hero-title {
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
