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
	.navBar {
		position: sticky;
		top: 0;
		display: flex;
		width: 100%;
		height: auto;
		padding: 1.5rem;
    background-color: var(--bg-color);
		justify-content: space-between;
		align-self: flex-start;
		@media only screen and (min-width: 1024px) {
			flex-direction: column;
			width: initial; 
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
