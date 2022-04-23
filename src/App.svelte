<script>
	import { isDarkMode } from "./stores/stores.js";
	import ShowCountries from "./components/ShowCountries.svelte";
	import Header from "./components/Header.svelte";
</script>

<main class:dark-mode={$isDarkMode}>
	<Header />
	<ShowCountries />
</main>

<style>
	main {
		min-height: 100vh;
		margin-inline: auto;
		max-width: 1240px;
	}

	@media (min-width: 768px) {}
</style>
