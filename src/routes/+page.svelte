<script>
	export let data;
</script>

{#each Object.entries(data) as [key, items]}
	<section class="pageSection">
		<h2>{key}</h2>
		{#each items.edges as { node }}
			<p class="score">{node.score}</p>
			<div>
				<a class="submissionLink" href={node.url} target="_blank">{node.title}</a>
			</div>
		{/each}
	</section>
{/each}

<style>
	.pageSection {
		display: grid;
		grid-template-columns: 2rem auto;
		gap: 0.5rem;
        padding: 0.5rem;
	}

	.pageSection h2:first-child {
		grid-column: 1 / span 2;
	}
	
	.submissionLink {
		text-decoration: none;
	}
</style>
