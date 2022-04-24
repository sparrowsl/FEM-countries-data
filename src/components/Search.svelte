<script>
  import {isDarkMode} from "../stores/stores.js"
</script>

<div class="search" class:dark-mode={$isDarkMode}>
  <input type="search" placeholder="Search for a country...">
</div>

<style>
  .search{
    position: relative;
    margin-block: 2em;
  }
  [type="search"]{
    background-image: url("../images/search-line.svg") no-repeat left;
    background-size: 50px;
    width: 100%;
    padding: 1.25em;
    padding-left: 50px;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    outline: 0;
    font-family: "Nunito Sans", sans-serif;
    color: var(--dark-gray);
    box-shadow: 2px 2px 5px rgb(230, 230, 230);
  }
  .dark-mode [type="search"]{
    background-color: var(--dark-blue);
    color: var(--white);
    box-shadow: 2px 2px 4px hsl(208.6, 27.3%, 15.1%);
  }
</style>
