<script>
	import { PageTypes, fetchData, pageQuery } from '$lib';
	import Post from '../components/Post.svelte';
	import PostSkeleton from '../components/PostSkeleton.svelte';

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
				{#each Array(5) as _}
			    	<PostSkeleton />
				{/each}
			{:then response}
				{#each response[pageType].edges as { node } (node.id)}
					{#if !node.dead && !node.deleted}
						<Post {node} />
					{/if}
				{/each}
			{/await}
			<a class="moreButton" href={`/${pageType}`}> more >> </a>
		</section>
	{/each}
</div>

<style>	
	.homePage {
		display: flex;
		flex-direction: column;
    @media only screen and (min-width: 1024px) {
      gap: 0.5rem;
    }
	}
	.pageSection {
		display: flex;
		flex-direction: column;
		min-height: 21rem;
	}
	.pageSection > h2:first-child {
		grid-column: 1 / span 2;
	}
	.pageSectionHeader {
    padding: 0 0.5rem;
    @media only screen and (min-width: 1024px) {
      padding: 0.5rem;
    }
	}
	.pageSectionHeaderLink {
    font-size: large;
    @media only screen and (min-width: 1024px) {
      font-size: x-large;
    }
	}
	.moreButton {
		align-self: flex-end;
	}
</style>
