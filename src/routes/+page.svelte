<script>
	import { PUBLIC_HOSTED_URL } from '$env/static/public';
	import { PageTypes, homePageQuery } from '$lib';
	import Post from '../components/Post.svelte';

	const data = fetch(PUBLIC_HOSTED_URL + homePageQuery)
		.then((res) => res.json())
		.then((out) => out.data);	
</script>

<div class="homePage">
	{#each Object.values(PageTypes) as pageType}
		<section class="pageSection">
			<h2 class="pageSectionHeader">{pageType}</h2>
				{#await data}
					<p class="loading">Getting the news...</p>
				{:then response}
					{#each response[pageType].edges as { node }}
						<Post node={node} />
					{/each}
				{/await}
		</section>
	{/each}
</div>

<style>
	.homePage {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.pageSection {
		display: flex;
		flex-direction: column;
	}

	.pageSection > h2:first-child, .loading {
		grid-column: 1 / span 2;
	}

	.pageSectionHeader {
		padding: 0.3rem;
	}
</style>
