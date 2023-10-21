<script>
	import { PageTypes } from '$lib';
	import Icon from '@iconify/svelte';
</script>

<nav>
	<ul>
		{#each Object.values(PageTypes) as pageType}
			<li class="navItem">
				<a href={`/${pageType}`}>
					<p class="navItemText">{pageType}</p>
				</a>
			</li>
		{/each}
		<li class="navFooter">
			<Icon icon="material-symbols:dark-mode-outline-rounded" width="1.7rem" height="1.7rem"/>
		</li>
	</ul>
</nav>

<style>
	nav {
		@media only screen and (max-width: 1024px) {
			display: none;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		list-style-type: none;
		padding: 0;
		align-items: end;
	}

	.navItem {
		width: 100%;
        height: 100%;
		
	}

    a:hover {
        background-color: antiquewhite;
    }

	a {
        display: inline-block;
		width: 100%;
		height: 100%;
        padding: 0.3rem 0.5rem;
		border-radius: 0.2rem;
		text-decoration: none;
		color: black;
	}

	.navItemText {
		float: right;
		font-size: x-large;
		font-family: 'Scada';
	}

	.navFooter {
		display: flex;
		gap: 0.2rem;
		padding: 0.3rem 0.5rem;
	}
</style>
