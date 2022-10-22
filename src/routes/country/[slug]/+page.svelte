<script>
	export let data;
	const country = data.country;
</script>

<svelte:head>
	<link href="https://css.gg/arrow-left.css" rel="stylesheet" />
</svelte:head>

<div class="container mx-auto py-10 px-5">
	<!-- Go back to countries -->
	<a
		href="/"
		class="flex w-fit items-center gap-2 rounded px-4 py-1 shadow dark:bg-dark_blue dark:text-white"
	>
		<i class="gg-arrow-left" />
		<span>Back</span>
	</a>

	<section class="mt-10 dark:text-white md:grid md:grid-cols-3 md:items-center md:gap-0">
		<!-- Country Flag -->
		<img
			src={country.flags.svg}
			alt="{country.name.common}'s flag"
			class="md:row-span-1 md:row-start-1 md:row-end-3"
		/>

		<div class="md:row-span-1 md:ml-10">
			<h2 class="my-4 text-2xl font-bold">{country.name.common}</h2>

			<p class="mb-2">
				<span class="font-semibold">Native Nave:</span>
				{Object.values(country.name.nativeName)[0].common}
			</p>
			<p class="mb-2">
				<span class="font-semibold">Population:</span>
				{country.population.toLocaleString('en-US')}
			</p>
			<p class="mb-2"><span class="font-semibold">Region:</span> {country.region}</p>
			<p class="mb-2"><span class="font-semibold">Sub Region:</span> {country.subregion}</p>
			<p class="mb-2 md:m-0"><span class="font-semibold">Capital:</span> {country.capital}</p>
		</div>

		<div class="mt-8 md:row-span-1 md:m-0">
			<p class="mb-1"><span class="font-semibold">Top Level Domain:</span> {country.tld}</p>
			<p class="mb-1">
				<span class="font-semibold">Currencies:</span>
				{Object.values(country.currencies)[0].name}
			</p>
			<p class="mb-1">
				<span class="font-semibold">Languages:</span>
				{Object.values(country.languages).join(', ')}
			</p>
		</div>

		<div
			class="mt-8 md:col-span-2 md:col-start-2 md:row-span-3 md:row-start-2
      md:mt-5 md:ml-10 md:flex md:items-center md:gap-4"
		>
			<h4 class="mb-2 font-semibold md:m-0">Border Countries:</h4>
			<div class="flex flex-wrap gap-4">
				{#each country.borders as border}
					<a
						href="/country/{country.name.common.toLowerCase()}"
						class="rounded px-4 py-2 shadow-md dark:bg-dark_blue"
					>
						{border}
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>
