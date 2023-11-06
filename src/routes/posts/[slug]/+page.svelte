<script>
	import { fetchData, itemQuery } from '$lib';
	import sanitizeHtml from 'sanitize-html';
	import Post from '../../../components/Post.svelte';
	import Comment from '../../../components/Comment.svelte';

	export let data;

	const query = fetchData(itemQuery(parseInt(data.props.slug)));
</script>

<svelte:head>
	{#await query then response}
		<title>{response.item.title} | hkr.news</title>
	{/await}
</svelte:head>

{#await query}
	<p>Getting comments...</p>
{:then response}
	<section class="postText">
		<Post node={response.item} />
		{@html sanitizeHtml(response.item.text)}
	</section>
	<section class="commentSection">
		{#each response.item.children as comment (comment.id)}
      {#if !comment.dead && !comment.deleted}
			  <Comment {comment} />
      {/if}
		{/each}
	</section>
{/await}

<style>
	.commentSection {
		display: flex;
		flex-direction: column;
	}
</style>
