<script>
    export let series;
</script>


{#each series as serie } 
<div class="series-card">   
    <img src="{'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + serie.poster_path}" alt="{serie.name}">
    <div>
        <h2>{serie.name}</h2>
        <p>{serie.first_air_date}</p>
    </div>
</div>
{/each}

<style>
   img{
    width: 100%;
   }
</style>