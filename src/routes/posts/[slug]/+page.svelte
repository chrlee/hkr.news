<script>
	import { fetchData, itemQuery } from '$lib';
    import sanitizeHtml from 'sanitize-html';
	import Post from '../../../components/Post.svelte';

	export let data;

	const query = fetchData(itemQuery(parseInt(data.props.slug)));
</script>

{#await query}
	<p>Getting comments...</p>
{:then response}
    <section class="postText">
        <Post node={response.item} />
        {@html sanitizeHtml(response.item.text)}
    </section>
    <section class="commentSection">
        {#each response.item.children as { id, text } (id)}
            <div class="comment">
                {@html sanitizeHtml(text)}
            </div>
        {/each}
    </section>
{/await}

<style>
    .commentSection {
        padding: 0.3rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>