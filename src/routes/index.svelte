<script context="module">
  const restCountriesURL = "https://restcountries.com/v3.1/all";

  export async function load({ fetch }) {
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
  }
</script>

<script>
  import Countries from "../components/Countries.svelte";
  import Search from "../components/Search.svelte";
  import Filter from "../components/Filter.svelte";
  import { countries } from "../stores/countries.js";
  import { saveLocal, loadLocal } from "../stores/localStorage.js";

  export let data;

  saveLocal("countries", data);
  $countries = data; // loadLocal("countries");
  // console.log($countries)
</script>

<section class="container mx-auto">
  <div class="flex items-center justify-between">
    <Search />
    <Filter />
  </div>

  <!-- <Countries /> -->
</section>

<style>
</style>
