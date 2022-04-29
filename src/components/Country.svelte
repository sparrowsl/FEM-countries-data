<script>
  import { fly } from "svelte/transition";
  import { isDarkMode } from "../stores/countries.js";
  import Image from "../components/shared/Image.svelte";

  export let country;
</script>

<div transition:fly={{ y: 200, duration: 500 }} class:dark-card={$isDarkMode}>
  <figure>
    <Image src={country.flags.svg} alt="{country.name}'s Flag" loading="lazy" />
    <figcaption class="country-detail" class:dark-mode={$isDarkMode}>
      <h2>{country.name.common}</h2>
      <p>
        <span>Population:</span>
        {country.population.toLocaleString("en-US")}
      </p>
      <p><span>Region:</span> {country.region}</p>
      <p><span>Capital:</span> {country.capital}</p>
    </figcaption>
  </figure>
</div>

<style>
  div {
    box-shadow: 2px 2px 4px silver;
    border-radius: 7px;
    overflow: hidden;
  }
  figure {
    font-family: "Nunito Sans", sans-serif;
    display: flex;
    flex-direction: column;
  }
  h2 {
    padding-bottom: 1.25em;
    font-size: 1.7rem;
  }
  figcaption {
    padding: 1em 2em 2em;
  }
  figcaption p {
    font-size: 1.35rem;
    line-height: 1.75;
  }
  figcaption span {
    font-weight: 700;
    margin-right: 0.25em;
  }
  .dark-mode {
    background-color: var(--dark-blue);
  }
  .dark-card {
    box-shadow: 2px 2px 4px hsl(208.6, 27.3%, 15.1%);
  }
</style>
