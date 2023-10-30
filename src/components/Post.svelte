<script>
  import { timeAgo } from '$lib/time';
	import Icon from '@iconify/svelte';
	export let node;
	const external = !!node.url;
	const commentsUrl = `/posts/${node.id}`; 
  const url = new URL(external ? node.url : `${location.protocol}//${location.host}${commentsUrl}`);
	const date = new Date(parseInt(node.time) * 1000);
</script>

<div class="post">
	<div class="info">
		<div>
			<a
				class="itemLink"
				href={url}
				target={external ? '_blank' : '_self'}
				rel={external ? 'external nofollow noreferrer' : ''}
			>
				{node.title}
			</a>
		</div>
		<div class="itemInfo">
			<p><Icon icon="tabler:plus" inline /> {node.score}</p>
			<a href={commentsUrl} rel="noindex"
				><Icon icon="tabler:message" inline /> {node.descendants}</a
			>
			<p><Icon icon="tabler:user" inline /> {node.by}</p>
			{#if date}
        <p><Icon icon="tabler:clock" inline /> {timeAgo(date)}</p>
			{/if}
		</div>
	</div>
	<div class="linkPreview">
		<a
			href={url}
			target={external ? '_blank' : '_self'}
			rel={external ? 'external nofollow noreferrer' : ''}
		>
			<img src={external ? `https://s2.googleusercontent.com/s2/favicons?domain=${new URL(url).hostname}&sz=20` : '/favicon.ico'} width="20" height="20" alt={url.hostname}/>
		</a>
    
	</div>
</div>

<style>
	img {
    min-width: 20px;
	}
	.post {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 0.5rem;
		border-radius: 0.2rem;
    gap: 0.2rem; 
    transition: transform ease 0.5s, box-shadow ease 0.5s;
	}
	.post:hover {
		background-color: var(--tertiary-color);
    transform: translateY(-1px);
    box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.25);
	}
	.info {
		display: flex;
		flex-direction: column;
		min-height: max-content;
	}
	.itemInfo {
		display: flex;
		gap: 1rem;
	}
  .linkPreview {
    text-align: right;
  }
</style>
