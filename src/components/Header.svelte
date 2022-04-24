<script>
  import { isDarkMode } from "../stores/stores.js";
  import ToggleDarkMode from "./shared/ToggleDarkMode.svelte";
</script>

<header class:dark-mode={$isDarkMode}>
  <div>
    <h1>Where in the world?</h1>
    <ToggleDarkMode />
  </div>
</header>

<style>
  header{
    box-shadow: 0 2px 10px rgb(223, 223, 223);
  }
  .dark-mode{
    background-color: var(--dark-blue);
    box-shadow: 2px 2px 4px hsl(208.6, 27.3%, 15.1%);
  }
  div {
    padding: 2.5em 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1{
    font-size: 1.65rem;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 700;
  }
  @media screen and (min-width: 768px) {
    div{
      padding-inline: 5em;
    }
  }
  @media screen and (min-width: 992px) {
    div{
      max-width: 1240px;
      margin-inline: auto;
    }
  }
</style>
