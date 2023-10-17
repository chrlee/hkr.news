<script>
	import { fetchData, itemQuery } from '$lib';
    import sanitizeHtml from 'sanitize-html';

	export let data;

	const query = fetchData(itemQuery(parseInt(data.props.slug)));
</script>

{#await query}
	<p>Getting comments...</p>
{:then response}
    <section class="commentSection">
        {#each response.item.children as { text }}
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