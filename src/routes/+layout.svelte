<script>
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import Navbar from './navbar.svelte';
  inject({ mode: dev ? 'development' : 'production' });
</script>

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
		padding: 1%;
	}
</style>
