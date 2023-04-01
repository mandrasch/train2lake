<script>
	/** @type {import('$lib/types').paginationData} */
	export let paginationData;
	$: nextBtnDisabled = paginationData.nextPage === '';
	$: prevBtnDisabled = paginationData.prevPage === '';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// TODO: this should only accept a number, how to check?
	/**
	 * @param {number | string} newPageToNavigate
	 */
	function changePage(newPageToNavigate) {
		console.log('Dispatching', { newPageToNavigate });
		dispatch('message', {
			newPageToNavigate
		});
	}
</script>

<div class="pagination">
	<button on:click={() => changePage(paginationData.prevPage)} disabled={prevBtnDisabled}
		>Previous</button
	>

	<span class="pagination__page-stats">{paginationData.page} / {paginationData.totalPages}</span>

	<!-- <span class="page-stats">{paginationData.from} - {paginationData.to} of {paginationData.total}</span>-->

	<button on:click={() => changePage(paginationData.nextPage)} disabled={nextBtnDisabled}
		>Next</button
	>
</div>

<style lang="scss">
	.pagination {
		display: flex;
		flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top:50px;

    button{
      width:auto;
      min-width:100px;
    }

    &__page-stats{
      min-width:100px;
      text-align: center;
    }
	}
</style>
