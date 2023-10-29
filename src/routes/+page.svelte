<script>
	import { PageTypes, fetchData, pageQuery } from '$lib';
	import Post from '../components/Post.svelte';

	const query = fetchData(pageQuery(Object.entries(PageTypes), 5));
</script>

<svelte:head>
	<title>hkr.news</title>
</svelte:head>

<div class="homePage">
	{#each Object.values(PageTypes) as pageType}
		<section class="pageSection">
			<h2 class="pageSectionHeader">
				<a class="pageSectionHeaderLink" href={`/${pageType}`}>
					{pageType}
				</a>
			</h2>
			{#await query}
				<p class="loading">Getting the news...</p>
			{:then response}
				{#each response[pageType].edges as { node } (node.id)}
					{#if node}
						<Post {node} />
					{/if}
				{/each}
			{/await}
			<a class="moreButton" href={`/${pageType}`}> more >> </a>
		</section>
	{/each}
</div>

<style>
	a {
		text-decoration: none;
		font-family: 'Scada';
		font-weight: 400;
	}
	.homePage {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.pageSection {
		display: flex;
		flex-direction: column;
		min-height: 21rem;
	}
	.pageSection > h2:first-child,
	.loading {
		grid-column: 1 / span 2;
	}
	.pageSectionHeader {
		padding: 0.5rem;
	}
	.pageSectionHeaderLink {
		font-size: x-large;
	}
	.moreButton {
		align-self: flex-end;
	}
</style>
