<script>
  import { timeAgo } from '$lib/time';
	import Icon from '@iconify/svelte';
	import sanitize from 'sanitize-html';
	export let comment;
	const date = new Date(parseInt(comment.time) * 1000);
</script>

<div class="comment">
	<div class="info">
		<div class="itemInfo">
			<p><Icon icon="tabler:user" inline />{comment.by}</p>
			{#if date}
        <p><Icon icon="tabler:clock" inline /> {timeAgo(date)}</p>
			{/if}
		</div>
    {@html sanitize(comment.text)}
	</div>
</div>

<style>
	.comment {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 0.5rem;
		border-radius: 0.2rem;
    gap: 0.2rem; 
    transition: box-shadow ease 0.5s;
	}
	.comment:hover {
		background-color: var(--tertiary-color);
    box-shadow: 1px 1px 3px 0px var(--box-shadow-color);
	}
	.info {
		display: flex;
		flex-direction: column;
		min-height: max-content;
	}
	.itemInfo {
		display: flex;
    color: var(--quaternary-color);
    flex-wrap: wrap;
		gap: 0 0.5rem;
    font-size: small;
    @media only screen and (min-width: 1024px) {
      gap: 0 1rem;
      font-size: medium;
    }
	}
</style>
