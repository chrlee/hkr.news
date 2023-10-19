<script>
	import { fetchData, pageQuery } from '$lib';
	import Post from '../../components/Post.svelte';

	export let data;
	let query;

	$: {
		query = fetchData(pageQuery([[data.props.slug.toUpperCase(), data.props.slug]], 40));
	};
</script>

<svelte:head>
	<title>hkr.news | {data.props.slug}</title>
</svelte:head>

{#await query}
	<p>Getting the news...</p>
{:then response}
	{#each response[data.props.slug].edges as { node }}
		<Post {node} />
	{/each}
{/await}
