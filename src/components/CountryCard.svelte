<script>
  import { fly } from "svelte/transition";
  import { isDarkMode } from "../stores/stores.js"

  export let country;
</script>

<div transition:fly={{ y: 200, duration: 2000 }}>
  <figure>
    <img src={country.flags.svg} alt="{country.name}'s Flag" loading="lazy" />
    <caption class="country-detail" class:dark-mode={$isDarkMode}>
      <h2>{country.name.common}</h2>
      <p>
        <span>Population:</span>
        {country.population.toLocaleString("en-US")}
      </p>
      <p><span>Region:</span> {country.region}</p>
      <p><span>Capital:</span> {country.capital}</p>
    </caption>
  </figure>
</div>

<style>
  img {
    max-width: 100%;
  }
  div {
    box-shadow: 2px 2px 4px silver;
    border-radius: 5px;
    overflow: hidden;
  }
  caption,
  figure {
    display: block;
    text-align: left;
    font-family: "Nunito Sans", sans-serif;
  }
  h2 {
    padding-bottom: 1.25em;
    font-size: 1.7rem;
  }
  caption {
    padding: 2em;
    padding-top: 1em;
  }
  caption p {
    font-size: 1.35rem;
    line-height: 1.75;
  }
  caption span {
    font-weight: 700;
    margin-right: 0.25em;
  }
  .dark-mode{
    background-color: var(--dark-blue);
  }
</style>
