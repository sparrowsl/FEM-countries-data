<script>
  import { regions } from "../stores/stores.js";
</script>

<div class="filter">
  <select name="" id="" on:change={(e) => console.log(e.target.value)}>
    <option value="" disabled selected hidden>Filter by Region</option>
    {#each $regions as region}
      <option value={region}>{region}</option>
    {/each}
  </select>
</div>

<style>
  .filter{
    padding: 0 2em;
  }
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
</style>
