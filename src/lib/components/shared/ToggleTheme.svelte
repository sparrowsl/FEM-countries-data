<script>
	import { onMount } from 'svelte';

	let darkMode = false;
	onMount(() => {});
	const toggleTheme = () => document.querySelector('html').classList.toggle('dark');
</script>

<button on:click={toggleTheme}>
	<span class="text-sm">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
</button>
