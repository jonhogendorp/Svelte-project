<script>
    export let series 
    import SeriesCard from "./SeriesCard.svelte";
</script>

<h1>Popular Series</h1>
<div class="popular-series"> 
    <SeriesCard {series}/> 
</div>

<style>
    .popular-series{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
       
    }
</style> 