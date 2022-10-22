<script context="module">
	const restCountriesURL = 'https://restcountries.com/v3.1/name';

	export async function load({ fetch, params }) {
		try {
			const response = await fetch(`${restCountriesURL}/${params.name}`);
			const country = await response.json();

			if (response.ok) {
				return {
					props: {
						country: country[0]
					}
				};
			}
		} catch (error) {
			console.error(`Error in single country/: ${error}`);
		}
	}
</script>

<script>
	// import { getBordersOf } from '../../lib/stores/countries.js';

	// import { saveLocal, loadLocal } from "../../stores/localStorage.js";

	// const countries = loadLocal("countries");

	export let country;

	// const borders = getBordersOf(country);
	// console.log(borders);

	const borderCountries = [];

	// $: console.log(borderCountries)
	// $: console.log(country.name.common)
</script>

<section class="container">
	<div class="back">
		<a href="/"><img src="/images/arrow-left-line.svg" alt="none" /> Back</a>
	</div>

	<section class="country-detail">
		<div class="flag">
			<img src={country.flags.svg} alt="{country.name.common}'s flag" />
		</div>

		<div class="name">
			<h2>{country.name.common}</h2>

			<p><b>Native Nave:</b> {Object.values(country.name.nativeName)[0].common}</p>
			<p><b>Population:</b> {country.population.toLocaleString('en-US')}</p>
			<p><b>Region:</b> {country.region}</p>
			<p><b>Sub Region:</b> {country.subregion}</p>
			<p><b>Capital:</b> {country.capital}</p>
		</div>

		<div class="extra-info">
			<p><b>Top Level Domain:</b> {country.tld}</p>
			<p><b>Currencies:</b> {Object.values(country.currencies)[0].name}</p>
			<p><b>Languages:</b> {Object.values(country.languages).join(', ')}</p>
		</div>

		<div class="border-countries">
			<h4>Border Countries:</h4>
			<ul>
				{#each borderCountries as border}
					<li><a href="/country/{border.toLowerCase()}">{border}</a></li>
				{/each}
			</ul>
		</div>
	</section>
</section>

<style>
	.container {
		padding: 2em;
	}
	.back {
		margin-block: 2em;
	}
	.back a {
		font-size: 1.5rem;
		text-decoration: none;
		box-shadow: 2px 2px 4px silver;
		border-radius: 3px;
		padding: 0.45em 1em;
		font-family: 'Nunito Sans', sans-serif;
		max-width: fit-content;
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
	.flag {
		margin-top: 2em;
		grid-area: flag;
	}
	.name {
		grid-area: country;
	}
	.extra-info {
		grid-area: extra;
	}
	.border-countries {
		grid-area: borders;
	}
	h2 {
		font-size: 2.25rem;
		margin-block: 0.7em;
	}
	h4 {
		font-size: 1.5rem;
		color: #333;
		margin-bottom: 1em;
	}
	ul {
		list-style-type: none;
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
	}
	ul a {
		box-shadow: 2px 2px 4px silver;
		padding: 0.25em 0.75em;
		border-radius: 3px;
		font-size: 1.25rem;
	}
	div p {
		font-size: 1.5rem;
		line-height: 2;
	}
	div p b {
		color: #333;
	}
	img {
		max-width: 100%;
		/* max-height: 300px; */
	}
	div p,
	ul a,
	h2,
	h4 {
		font-family: 'Nunito Sans', sans-serif;
	}
	.country-detail {
		display: grid;
		gap: 3em;
	}

	@media screen and (min-width: 768px) {
		.country-detail {
			justify-content: space-evenly;
			align-items: center;
			grid-template-areas:
				'flag country extra'
				'flag borders borders';
		}
	}
	@media screen and (min-width: 992px) {
		.flag img {
			height: 300px;
		}
		.container {
			max-width: 1240px;
			overflow: hidden;
			margin-inline: auto;
		}
	}
</style>
