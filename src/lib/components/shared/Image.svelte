<script>
	export let src;
	export let alt = 'An Image';
	export let loading = 'lazy';
	export let width = '';
	export let height = '';
	export let classes = '';
</script>

<img {src} {alt} {loading} {width} {height} class={classes} />
