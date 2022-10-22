<script>
	import Country from './Country.svelte';
	import { filteredCountries } from '../stores/countries.js';
</script>

<section class="mt-10 grid gap-10 px-7 md:grid-cols-2 lg:grid-cols-4">
	{#each $filteredCountries || [] as country}
		<Country {country} />
	{:else}
		<p>No Country found...</p>
	{/each}
</section>
