<script>
  import { isDarkMode, filtered, countries } from "../stores/countries.js";

  let searchValue;

  $: if (searchValue) {
    $filtered = $countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
  } else {
    $filtered = $countries;
  }
</script>

<div class="search" class:dark-mode={$isDarkMode}>
  <input
    type="search"
    bind:value={searchValue}
    placeholder="Search for a country..."
  />
</div>

<style>
  .search {
    position: relative;
    margin-block: 2em;
  }
  [type="search"] {
    background-image: url("../images/search-line.svg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: 30px;
    width: 100%;
    padding: 1.25em;
    padding-left: 40px;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    outline: 0;
    font-family: "Nunito Sans", sans-serif;
    color: var(--dark-gray);
    box-shadow: 2px 2px 5px rgb(230, 230, 230);
  }
  .dark-mode [type="search"] {
    background-color: var(--dark-blue);
    color: var(--white);
    box-shadow: 2px 2px 4px hsl(208.6, 27.3%, 15.1%);
  }
</style>
