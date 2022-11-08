<script>
	import Image from './shared/Image.svelte';

	export let country;
</script>

<figure class="relative rounded-md bg-white shadow-md dark:bg-dark_blue dark:text-white">
	<!-- Country flag -->
	<Image src={country.flags.svg} alt="{country.name}'s Flag" classes="aspect-video w-full" />

	<!-- Country details -->
	<figcaption class="p-5">
		<h2 class="mb-3 text-lg font-bold text-very_dark_blue_text md:text-xl">
			<!-- Using this conditional statement because the API has a bug for the "nigeria" link.
          It redirects to Niger instead -->
			{#if country.name.common.toLowerCase() === 'nigeria'}
				<a href="/country/nige">{country.name.common}</a>
			{:else}
				<a href="/country/{country.name.common.toLowerCase()}">
					{country.name.common}
				</a>
			{/if}
		</h2>

		<!-- Country's population -->
		<p class="mb-1">
			<span class="font-semibold">Population:</span>
			{country.population.toLocaleString('en-US')}
		</p>
		<!-- Country's region -->
		<p class="mb-1"><span class="font-semibold">Region:</span> {country.region}</p>
		<!-- Country's capital city -->
		<p><span class="font-semibold">Capital:</span> {country.capital}</p>
	</figcaption>
</figure>
