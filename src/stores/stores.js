import { writable, readable } from "svelte/store";


export let isDarkMode = writable(true)

export const regions = readable(["All", "Africa", "America", "Asia", "Europe", "Oceania"])

export let filteredCountries = writable([])

export let countries = writable([
  {
    population: 3473727,
    region: "Asia",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  },
  {
    population: 3473727,
    region: "Africa",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  },
  {
    population: 3473727,
    region: "Asia",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  },  {
    population: 3473727,
    region: "Africa",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  },  {
    population: 3473727,
    region: "Europe",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  },  {
    population: 3473727,
    region: "Europe",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  },  {
    population: 3473727,
    region: "Africa",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  },  {
    population: 3473727,
    region: "Africa",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  },  {
    population: 3473727,
    region: "Africa",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  },])
