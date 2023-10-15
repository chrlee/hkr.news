<script>
	export let data;
</script>

{#each Object.entries(data) as [key, items]}
	<section class="pageSection">
		<h2>{key}</h2>
		{#each items.edges as { node }}
			<p class="score">{node.score}</p>
			<p>{node.title}</p>
		{/each}
	</section>
{/each}

<style>
	.pageSection {
		display: grid;
		grid-template-columns: 2rem auto;
		column-gap: 1rem;
	}
	.pageSection h2:first-child {
		grid-column: 1 / span 2;
	}
</style>
