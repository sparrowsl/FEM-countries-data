<script>
  let darkMode = false;
</script>

<button on:click={() => (darkMode = !darkMode)}>
  {#if darkMode}
    <span>Dark Mode</span>
  {:else}
    <span>Light Mode</span>
  {/if}
</button>

<style>
</style>
