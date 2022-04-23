<script>
  import Search from "./Search.svelte";
  import Filter from "./Filter.svelte";
  import CountryCard from "./CountryCard.svelte";

  const restCountriesURL = "https://restcountries.com/v3.1/all";

  async function getCountries() {
    const response = await fetch(restCountriesURL);
    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error(result);
    }
  }

  let data = getCountries();

</script>

<section>
  <Search />
  <Filter />

  <section class="countries">
    {#await data}
      <div class="waiting-loader">
        <span class="loader" />
        <p class="loading-info">loading countries...</p>
      </div>
    {:then countries}
      {#each countries as country}
        <CountryCard {country} />
      {/each}
    {:catch error}
      <p>There was an {error.message} error, please refresh the page.</p>
    {/await}
  </section>
</section>

<style>
  .countries {
    padding: 2em;
    display: grid;
    gap: 3em;
  }
  /* an animated circle to spin while data is loading */
  div.waiting-loader {
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
  }
  .loading-info {
    padding-top: 1.5em;
    font-size: 1.5rem;
    font-family: "Nunito Sans", sans-serif;
  }
  .loader {
    justify-self: center;
    border: 2px dashed lightslategray;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    animation-name: spinLoader;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes spinLoader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
