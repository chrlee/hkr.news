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
	ul {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		list-style-type: none;
		padding: 0.25rem;
		align-items: end;
    margin: 0;
    @media only screen and (min-width: 1024px) {
      flex-direction: column;
      gap: 1.5rem;
    }
	}

	.navItem {
		width: 100%;
		height: 100%;
    transition: transform ease 0.5s, box-shadow ease 0.5s;
	}

	.navItemText {
    @media only screen and (min-width: 1024px) {
      float: right;
      font-size: x-large;
    }
	}
</style>
