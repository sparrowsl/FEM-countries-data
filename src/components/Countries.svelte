<script>
  import { loadLocal } from "../stores/localStorage.js";
  import { countries, filtered } from "../stores/countries.js";
  import Country from "./Country.svelte";

  // get the countries from the localStorage
  $countries = loadLocal("countries", []);

  if ($filtered !== true) {
    $filtered = $countries;
    // console.log($filtered)
  }
</script>

<section class="countries">
  {#each $filtered as country}
    <Country {country} />
  {:else}
    <p>Loading countries....</p>
  {/each}
</section>

<style>
  .options,
  .countries {
    padding-inline: 2em;
  }
  .countries {
    padding-block: 2em;
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

  @media screen and (min-width: 768px) {
    .options,
    .countries {
      padding-inline: 5em;
    }
    .options {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .countries {
      padding-inline: 5em;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  @media screen and (min-width: 992px) {
    .options,
    .countries {
      max-width: 1240px;
      margin-inline: auto;
    }
    .countries {
      gap: 5em;
      /* grid-template-columns: repeat(4, 1fr); */
    }
  }
</style>
