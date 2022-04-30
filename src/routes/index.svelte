<script context="module">
  const restCountriesURL = "https://restcountries.com/v3.1/all";

  export const load = async ({ fetch }) => {
    try {
      const response = await fetch(restCountriesURL);
      const data = await response.json();

      if (response.ok) {
        return {
          props: {
            data,
          },
        };
      }
    } catch (error) {
      console.error(`Error in load/: ${error}`);
    }
  };
</script>

<script>
  import "../global.css";
  import Countries from "../components/Countries.svelte";
  import Search from "../components/Search.svelte";
  import Filter from "../components/Filter.svelte";
  import { countries } from "../stores/countries.js";

  export let data;
  $countries = data;
</script>

<svelte:head>
  <link href="https://css.gg/moon.css" rel="stylesheet" />
  <link href="https://css.gg/search.css" rel="stylesheet" />
</svelte:head>

<section>
  <div class="options">
    <Search />
    <Filter />
  </div>

  <Countries />
</section>

<style>
  .options {
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media screen and (min-width: 768px) {
    .options {
      padding: 0;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
</style>
