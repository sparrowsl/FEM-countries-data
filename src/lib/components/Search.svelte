<script>
	import { searchedCountry, filteredCountries, countries } from '../stores/countries.js';
	// import Image from './shared/Image.svelte';

	$: if ($searchedCountry) {
		$filteredCountries = $countries.filter((country) =>
			country.name.common.toLowerCase().includes($searchedCountry.toLowerCase())
		);
	} else {
		$filteredCountries = $countries;
	}
</script>

<svelte:head>
	<link href="https://css.gg/search.css" rel="stylesheet" />
</svelte:head>

<!-- Search Input -->
<div class="flex w-full items-center overflow-hidden rounded bg-fem_white pl-4 shadow md:max-w-sm">
	<label for="search">
		<i class="gg-search mr-4 text-dark_gray" />
	</label>

	<input
		type="search"
		id="search"
		bind:value={$searchedCountry}
		placeholder="Search for a country..."
		class="w-full px-3 py-3 text-sm text-dark_gray md:text-base"
	/>
</div>
