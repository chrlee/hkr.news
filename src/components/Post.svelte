<script>
	import Icon from '@iconify/svelte';
	export let node;
	const external = !!node.url;
	const commentsUrl = `posts/${node.id}`;
	const date = new Date(parseInt(node.time) * 1000);
</script>
<div class="post">
	<div class="info">
		<div>
			<a
				class="itemLink"
				href={external ? node.url : commentsUrl}
				target={external ? '_blank' : '_self'}
				rel={external ? 'external nofollow noreferrer' : ''}
			>
				{node.title}
			</a>
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
	<div class="linkPreview">
		<a
			href={external ? node.url : commentsUrl}
			target={external ? '_blank' : '_self'}
			rel={external ? 'external nofollow noreferrer' : ''}
		>
			({external ? new URL(node.url).hostname : "hkr.news"})
		</a>
	</div>
</div>
<style>
	a {
		text-decoration: none;
	}
	.post{
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 0.5rem;
		border-radius: 0.2rem;
	}
	.post:hover {
		background-color: antiquewhite;
	}
	.info{
		display: flex;
		flex-direction: column;
		min-height: max-content;
	}
	.itemInfo {
		display: flex;
		gap: 1rem;
	}
	
</style>
