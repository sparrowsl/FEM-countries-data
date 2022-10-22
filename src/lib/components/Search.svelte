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

<!-- Search Input -->
<div class="flex w-full rounded bg-fem_white shadow ">
	<img src="icons/search-line.svg" alt="" class="p-2" />
	<!-- <Image src="/icons/search-line.svg" class="p-2" /> -->

	<input
		type="search"
		bind:value={$searchedCountry}
		placeholder="Search for a country..."
		class="w-full px-3 py-3"
	/>
</div>
