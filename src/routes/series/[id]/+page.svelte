<script>
    export let data
    const series = data.props.data
    console.log(series)
    const genre = series.genres
    console.log(genre)
</script>

<div class="container">
    <div class="series-indi-card">
        <div>
            <img src="{"https://www.themoviedb.org/t/p/w1280/"+ series.backdrop_path}" alt="{series.name}">
        </div>
        <div class="genres">
            {#each genre as genres }
                <button class="genre-button">
                    {genres.name}
                </button>
            {/each}
        </div>
        <h2>{series.name}</h2>
        <p><span>First air date</span><br>
            {series.first_air_date}
        </p>
        <p>
            <span>Number of Episodes: </span>
            {series.number_of_episodes}
        </p>
        <p>
            <span>Number of Season(s): </span>
            {series.number_of_seasons}
        </p>
    </div>
</div>
    
    <style>
    .genres{
        margin: 20px 0;
    }
    .genre-button{
        border-radius: 100px;
        background-color: rgb(44, 0, 202);
        border: 1px solid rgba(224, 112, 0);
        margin-right: 20px;
        padding: 10px 20px;
        color: white;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .series-indi-card{
        margin: 150px;
        width: 50%;
    }

    img{
        width: 100%;
        border-radius: 2rem;
    }
</style>