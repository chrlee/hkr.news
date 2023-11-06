<script>
	import Header from './Header.svelte';
	import NavMenu from './NavMenu.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="navBar">
	<Header />
	<NavMenu />
  <ThemeToggle />
</div>

<style>
	.navBar {
		position: sticky;
		top: 0;
		display: flex;
    gap: 0.5rem;
		width: 100%;
		height: auto;
    background-color: var(--bg-color);
		justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
		@media only screen and (min-width: 1024px) {
			flex-direction: column;
			width: initial; 
      padding: 1.5rem;
      align-items: flex-end;
      gap: 1rem;
		}
	}
</style>
