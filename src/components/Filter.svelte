<script>
  import { regions, countries, filtered } from "../stores/countries.js";

  let value;

  // $: if (value === "All") {
  //   $filtered = $countries;
  // } else if (value) {
  //   $filtered = $countries.filter((country) => country.region === value);
  // }
</script>

<div class="filter">
  <select name="" id="" bind:value class="px-4 py-2">
    <option value="" disabled selected hidden>Filter by Region</option>
    {#each $regions as region}
      <option value={region}>{region}</option>
    {/each}
  </select>
</div>

<style>
</style>
