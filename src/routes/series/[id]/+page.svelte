<script>
    export let data
    const series = data.props.data
    console.log(series)
</script>

<div class="container">
    <div class="series-indi-card">
        <div>
            <img src="{"https://www.themoviedb.org/t/p/w1280/"+ series.backdrop_path}" alt="{series.name}">
        </div>
        <h2>{series.name}</h2>
    </div>
</div>
    
    <style>

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