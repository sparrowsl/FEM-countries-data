<script>
	import ToggleTheme from './shared/ToggleTheme.svelte';
</script>

<header
	class="sticky top-0 z-20 grid h-[10vh] items-center bg-fem_white py-4
	shadow-md transition-colors dark:bg-very_dark_blue"
>
	<div class="container mx-auto flex items-center justify-between px-3">
		<h1 class="text-sm font-bold dark:text-fem_white md:text-base">Where in the world?</h1>

		<!-- Toggle between light and dark mode -->
		<ToggleTheme />
	</div>
</header>

<style>
</style>
