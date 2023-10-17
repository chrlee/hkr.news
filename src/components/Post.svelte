<script>
	import Icon from '@iconify/svelte';
	export let node;
	const date = new Date(parseInt(node.time) * 1000);
</script>

<div class="item">
	<div>
		<a class="itemLink" href={node.url} target="_blank" rel="external nofollow noreferrer"
			>{node.title}</a
		>
	</div>
	<div class="itemInfo">
		<p><Icon icon="ic:baseline-plus" inline /> {node.score}</p>
		<a href={`posts/${node.id}`} rel="noindex"
			><Icon icon="pixelarticons:comment" inline /> {node.descendants}</a
		>
		<p><Icon icon="memory:user" inline /> {node.by}</p>
		{#if date}
            <p>{`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</p>
        {/if}
	</div>
</div>

<style>
	.item {
		display: flex;
		flex-direction: column;
		min-height: max-content;
		min-width: 100%;
		padding: 0.3rem;
	}
	.item:hover {
		background-color: antiquewhite;
	}
	.itemLink {
		text-decoration: none;
		font-size: large;
	}

	.itemInfo {
		display: flex;
		gap: 1rem;
	}
</style>
