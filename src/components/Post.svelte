<script>
    import Icon from "@iconify/svelte";
    export let node;
</script>

<div class="item">
    <div>
        <a class="itemLink" href={node.url} target="_blank">{node.title}</a>
    </div>
    <div class="itemInfo">
        <p><Icon icon="ic:baseline-plus" inline/> {node.score}</p>
        <p><Icon icon="pixelarticons:comment" inline/> {node.descendants}</p>
    </div>
</div>

<style>
    .item{
		display: flex;
        flex-direction: column;
        min-height: max-content;
        min-width: 100%;
	}
	.itemLink {
		text-decoration: none;
	}

	.itemInfo {
		display: flex;
		gap: 1rem;
	}
</style>