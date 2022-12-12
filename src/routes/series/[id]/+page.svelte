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
        <div>
            {#each genre as genres }
                <button class="genre-button">
                    <h3>{genres.name}</h3>
                </button>
            {/each}
        </div>
        <h2>{series.name}</h2>
        <p><span>Release date</span><br>
            {series.first_air_date}
        </p>
    </div>
</div>
    
    <style>
    .genre-button{
        border-radius: 100px;
        background-color: rgb(40, 38, 38);
        margin: 20px;
        padding: 0 10px;
    }

    h3{
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