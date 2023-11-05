<script lang="ts">
  import Icon from '@iconify/svelte';
  import { persisted } from 'svelte-persisted-store';

  let darkMode = persisted('darkMode') === 'true';
	const toggleDarkMode = () => {
    darkMode = !darkMode;
    persisted('darkMode', darkMode);
		document.documentElement.classList.toggle('dark');
	};
</script>

<button on:click={toggleDarkMode}>
  <Icon
    icon={`tabler:sun${darkMode ? '' : '-off'}`}
    width="1.7rem"
    height="1.7rem"
  />
</button>

