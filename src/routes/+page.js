const restCountriesURL = 'https://restcountries.com/v3.1/all';

export async function load({ fetch }) {
	const response = await fetch(restCountriesURL);

	if (response.ok) {
		const data = await response.json();
		return { countries: data };
	}

	console.error(`Error in +page.js`);
}
