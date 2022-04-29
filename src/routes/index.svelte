<!-- <script context="module">
  const restCountriesURL = "https://restcountries.com/v3.1/all";

  export const load = async ({ fetch }) => {
    try {
      const response = await fetch(restCountriesURL);
      const countries = await response.json();

      if (response.ok) {
        return {
          props: {
            countries,
          },
        };
      }
    } catch (error) {
      console.error(`Error in load/: ${error}`);
    }
  };
</script> -->

<script>
  import "../global.css";
  import Countries from "../components/Countries.svelte";
  import Search from "../components/Search.svelte";
  import Filter from "../components/Filter.svelte";
  import {saveLocal} from "../stores/localStorage.js"

  // export let countries
// saveLocal("countries", countries)
</script>

<svelte:head>
  <link href="https://css.gg/moon.css" rel="stylesheet" />
  <link href="https://css.gg/search.css" rel="stylesheet" />
</svelte:head>

<section>
  <div class="options">
    <Search />
    <Filter/>
  </div>

  <Countries />
</section>

<style>
  .options {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
