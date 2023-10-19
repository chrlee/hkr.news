<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Navbar from '../components/Navbar/NavBar.svelte';
	import Seo from '../components/Seo/Seo.svelte';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<Seo />

<div class="pageWrapper">
	<Navbar />
	<div class="pageContent">
		<slot />
	</div>
</div>

<style>
	@import './reset.css';

	.pageWrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 1rem;
		@media only screen and (min-width: 1024px) {
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
			gap: 2rem;
			padding: 1rem;
		}
	}

	.pageContent {
		width: 100%;
		overflow: hidden;
		padding: 1rem;
		@media only screen and (min-width: 1024px) {
			width: 80%;
			padding: 0;
		}
	}
</style>
