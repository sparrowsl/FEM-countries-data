<script>
	import { filteredCountries, countries } from '../stores/countries.js';

	const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

	let selectedRegion;

	$: if (selectedRegion === 'All') {
		$filteredCountries = $countries;
	} else if (selectedRegion) {
		$filteredCountries = $countries.filter((country) => country.region === selectedRegion);
	}
</script>

<div class="filter">
	<select name="" id="" bind:value={selectedRegion} class="px-4 py-2">
		<option value="" disabled selected hidden>Filter by Region</option>
		{#each regions as region}
			<option value={region} class="text-sm md:text-base">{region}</option>
		{/each}
	</select>
</div>
