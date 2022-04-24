<script>
  import { regions, isDarkMode, filteredCountries, countries } from "../stores/stores.js";

  function filterCountry(e){
    // console.log("target",e.target.value.toLowerCase())

    const filtered = $countries.filter((country) => country.region === e.target.value)

    console.log(filtered)
  }
</script>

<div class="filter" class:dark-mode={$isDarkMode}>
  <select name="" id="" on:change={filterCountry}>
    <option value="" disabled selected hidden>Filter by Region</option>
    {#each $regions as region}
      <option value={region}>{region}</option>
    {/each}
  </select>
</div>

<style>
  select {
    width: fit-content;
    padding: 1em;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    outline: 0;
    font-family: "Nunito Sans", sans-serif;
    background-color: var(--white);
    box-shadow: 2px 2px 5px rgb(230, 230, 230);
  }
  .dark-mode select{
    background-color: var(--dark-blue);
    color: var(--white);
    box-shadow: 2px 2px 4px hsl(208.6, 27.3%, 15.1%);
  }
</style>
