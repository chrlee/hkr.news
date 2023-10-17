<script>
	import { fetchData, itemQuery } from '$lib';

	export let data;

	console.log(itemQuery(parseInt(data.props.slug)));
	const query = fetchData(itemQuery(parseInt(data.props.slug)));
</script>

{#await query}
	<p>Getting comments...</p>
{:then response}
	{console.log(response)}
	{#each response.item.children as { text }}
		{@html text}
	{/each}
{/await}
