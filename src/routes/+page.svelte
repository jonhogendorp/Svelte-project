<script>
  export let data;
  console.log(data.props)
  const series = data.props.popular
  console.log(series)
  import PopularMovies from "../components/PopularMovies.svelte";
  
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<section>
   <PopularMovies {series}/>
</section>


    
<style>

</style>