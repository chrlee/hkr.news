<script>
	import Icon from '@iconify/svelte';
	import Header from './Header.svelte';
</script>

<nav>
	<div class="menuButton">
		<Icon icon="line-md:close-to-menu-transition" inline={true} width="1.5em" height="1.5em" />
	</div>
	<Header />	
	<div class="filler" />
</nav>

<style>
	nav {
		position: sticky;
		top: 1.5rem;
		display: flex;
		width: 100%;
		height: auto;
		padding: 0 1rem;
		justify-content: space-between;
		align-self: flex-start;
		@media only screen and (min-width: 1024px) {
			flex-direction: column;
			width: initial;
			top: 1.3rem;
		}
	}

	.menuButton {
		@media only screen and (min-width: 1024px) {
			display: none;
		}
	}

	.filler {
		width: 1.5em;
	}
</style>
