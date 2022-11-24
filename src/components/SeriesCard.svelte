<script>
    export let series;
</script>


{#each series as serie } 
<div class="series-card"> 
    <a href={'series/'+serie.id}>
        <img src="{'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + serie.poster_path}" alt="{serie.name}">
    </a>  
    <div class="description">
        <h2>{serie.name}</h2>
        <p>{serie.first_air_date}</p>
    </div>
</div>
{/each}

<style>
   img{
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 1rem;
   }
   h2{
    font-size: 0.9rem;
    font-family: Helvetica, sans-serif;
   }
   .description{
        height: 5vh;
   }
   p{
    font-size: 0.6rem;
    font-family: Helvetica, sans-serif;
   }
   .series-card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
   }
</style>