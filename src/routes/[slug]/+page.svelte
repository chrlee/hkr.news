<script>
	import { fetchData, pageQuery } from '$lib';
	import Post from '../../components/Post.svelte';

	export let data;

	const query = fetchData(pageQuery([[data.props.slug.toUpperCase(), data.props.slug]], 40));
</script>

{#await query}
	<p>Grabbing the news...</p>
{:then response}
	{#each response[data.props.slug].edges as { node }}
		<Post {node} />
	{/each}
{/await}
