<script>
  import { isDarkMode } from "../../stores/stores.js";
</script>

<button class:dark-mode={$isDarkMode} on:click={() => $isDarkMode = !$isDarkMode}>
  {#if isDarkMode}
    <i class="gg-moon" />
    <span>Dark Mode</span>
  {:else}
    <i class="gg-moon" />
    <span>Light Mode</span>
  {/if}
</button>

<style>
  button,
  button:focus,
  button:active {
    outline: none;
    border: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7em;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 300;
  }
  button:hover{
    cursor: pointer;
  }
  .gg-moon {
    --ggs: 0.85;
  }
  span {
    font-size: 1.5rem;
  }
</style>
