<script>
  export let data;
  const series = data.props.popular
  import PopularMovies from "../components/PopularMovies.svelte";
  import Navbar from "../components/Navbar.svelte"
  import "../global.css"; 
</script>

<Navbar/>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<section class="">
   <PopularMovies {series}/>
</section>


    
<style>

</style>