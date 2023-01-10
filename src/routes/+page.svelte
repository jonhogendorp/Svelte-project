<script>
  export let data;
  const series = data.props.popular
  import PopularSeries from "../components/PopularSeries.svelte";
  import SearchSeries from "../components/SearchSeries.svelte";
  import "../global.css"; 
</script>


<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<section class="series-land">
  <SearchSeries/>
  <PopularSeries {series}/>
</section>


    
<style>

</style>