<script>
	import ToggleTheme from './shared/ToggleTheme.svelte';
</script>

<header class="grid h-[10vh] items-center bg-fem_white py-4 shadow-md dark:bg-black">
	<div class="container mx-auto flex items-center justify-between px-3">
		<h1 class="text-sm font-bold">Where in the world?</h1>

		<!-- Toggle between light and dark mode -->
		<ToggleTheme />
	</div>
</header>

<style>
</style>
