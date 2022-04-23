import { writable, readable } from "svelte/store";


export let isDarkMode = writable(false)

export const regions = readable(["All", "Africa", "America", "Asia", "Europe", "Oceania"])
