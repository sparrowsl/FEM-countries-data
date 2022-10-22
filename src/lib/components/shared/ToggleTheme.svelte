<script>
	let darkMode = false;

	const toggleTheme = () => {
		document.querySelector('html').classList.toggle('dark');
		darkMode = !darkMode;
	};
</script>

<svelte:head>
	<link href="https://css.gg/moon.css" rel="stylesheet" />
	<link href="https://css.gg/sun.css" rel="stylesheet" />
</svelte:head>

<button on:click={toggleTheme} class="flex items-center gap-3 text-sm transition-colors">
	<!-- <i class="gg-sun"></i> -->
	<i class="{darkMode ? 'gg-moon' : 'gg-sun'} dark:text-white" />

	<span class=" dark:text-white">
		{darkMode ? 'Dark Mode' : 'Light Mode'}
	</span>
</button>
