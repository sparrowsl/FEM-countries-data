<script>
  import { regions, countries, filtered } from "../stores/countries.js";

  let value;

  $: if (value === "All") {
    $filtered = $countries;
  } else if (value) {
    $filtered = $countries.filter((country) => country.region === value);
  }
</script>

<div class="filter">
  <select name="" id="" bind:value>
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
  .dark-mode select {
    background-color: var(--dark-blue);
    color: var(--white);
    box-shadow: 2px 2px 4px hsl(208.6, 27.3%, 15.1%);
  }
</style>
