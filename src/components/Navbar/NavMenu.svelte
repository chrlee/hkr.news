<script>
	import { PageTypes } from '$lib';
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
		border-radius: 0.5rem;
	}

	.navItemText {
		float: right;
		font-size: x-large;
	}
</style>
