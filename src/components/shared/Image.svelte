<script>
  export let src;
  export let alt = "An Image";
  export let loading = "eager";
  export let width = "";
  export let height = "";
</script>

<img {src} {alt} {loading} {width} {height} />

<style>
  img {
    max-width: 100%;
  }
</style>
