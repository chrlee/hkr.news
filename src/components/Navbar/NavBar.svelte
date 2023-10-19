<script>
	import Icon from '@iconify/svelte';
	import Header from './Header.svelte';
	import NavMenu from './NavMenu.svelte';
</script>

<div class="navBar">
	<button class="menuButton">
		<Icon icon="line-md:close-to-menu-transition" inline={true} width="1.5em" height="1.5em" />
	</button>
	<Header />
	<NavMenu />
	<div class="filler" />
</div>

<style>
	button,
	button:focus {
		outline: none;
		background: transparent;
		border: 1px solid transparent;
		padding: 0;
	}

	button:active {
		outline: none;
		background: transparent;
		border: 1px solid grey;
	}
	.navBar {
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
			top: 1rem;
		}
	}

	.menuButton {
		cursor: pointer;
		@media only screen and (min-width: 1024px) {
			display: none;
		}
	}

	.filler {
		width: 1.5rem;
	}
</style>
