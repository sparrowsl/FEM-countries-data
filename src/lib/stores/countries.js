import { writable } from 'svelte/store';

export const isDarkMode = writable(false);

export const filteredCountries = writable([]);

export const searchedCountry = writable('');

export const countries = writable([]);
