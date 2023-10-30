<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap" rel="stylesheet">
</svelte:head>

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
	<main class="pageContent">
		<slot />
	</main>
</div>

<style>
	@import '../styles/reset.css';
	@import '../styles/theme.css';
  @import '../styles/global.css';

	.pageWrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		@media only screen and (min-width: 1024px) {
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
		}
	}
	.pageContent {
		width: 100%;
    min-height: 100vh;
		overflow: hidden;
		padding: 1rem;
    flex-grow: 1;
    background-color: var(--secondary-color);
		@media only screen and (min-width: 1024px) {
			width: 80%;
		}
	}
</style>
