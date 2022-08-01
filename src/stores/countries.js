import { writable, readable } from "svelte/store";


export let isDarkMode = writable(false);

export const regions = readable(["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]);

export let filtered = writable([]);



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
  }, {
    population: 3473727,
    region: "Africa",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  }, {
    population: 3473727,
    region: "Europe",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  }, {
    population: 3473727,
    region: "Europe",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  }, {
    population: 3473727,
    region: "Africa",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  }, {
    population: 3473727,
    region: "Africa",
    capital: "Capital",
    name: {
      common: "Country"
    },
    flags: {
      svg: "https://flagcdn.com/uy.svg"
    }
  }
]);

export const getBordersOf = (country) => {
  countries.filter(count => console.log(count))
  return country.borders;
};
