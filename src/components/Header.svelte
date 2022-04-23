<script>
  import { isDarkMode } from "../stores/stores.js";
  import ToggleDarkMode from "./shared/ToggleDarkMode.svelte";
</script>

<header class:dark-mode={$isDarkMode}>
  <h1>Where in the world?</h1>
  <ToggleDarkMode />
</header>

<style>
  header {
    padding: 2.5em 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgb(223, 223, 223);
  }
  h1{
    font-size: 1.65rem;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 700;
  }
</style>
