<script>
	import { fetchData, itemQuery } from '$lib';
	import sanitize from 'sanitize-html';

	export let data;

	const query = fetchData(itemQuery(parseInt(data.props.slug)));
</script>

{#await query}
	<p>Getting comments...</p>
{:then response}
	{#each response.item.children as { text }}
		{@html sanitize(text)}
	{/each}
{/await}
