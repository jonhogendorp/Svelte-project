<script>
    export let data
    const series = data.props.data
    console.log(series)
</script>

<div>
    <div>
        <img src="{"https://www.themoviedb.org/t/p/w1280/"+ series.backdrop_path}" alt="">
        
    </div>
    <h2>{series.name}</h2>
</div>

<style>

</style>