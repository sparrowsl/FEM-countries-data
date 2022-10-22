<script>
	import Countries from '../lib/components/Countries.svelte';
	import Search from '../lib/components/Search.svelte';
	import Filter from '../lib/components/Filter.svelte';
	import { countries } from '../lib/stores/countries.js';

	export let data;
	$countries = data.countries;
</script>

<div class="container mx-auto">
	<section class="mt-7 flex flex-col items-center gap-7 px-3 md:flex-row md:justify-between">
		<Search />
		<Filter />
	</section>

	<Countries />
</div>
