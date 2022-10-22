const restCountriesURL = 'https://restcountries.com/v3.1/name';

export async function load({ fetch, params }) {
	const res = await fetch(`${restCountriesURL}/${params.slug}`);

	if (res.ok) {
		const country = await res.json();

		if (params.slug.toLowerCase() === 'china') {
			return { country: country[country.length - 1] };
		}

		return { country: country[0] };
	}

	console.error(`Error in single country`);
}
