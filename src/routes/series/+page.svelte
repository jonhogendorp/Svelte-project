<script>
    export let data;
    const series = data.props.popular
    import PopularSeries from "../../components/PopularSeries.svelte";
    import SearchSeries from "../../components/SearchSeries.svelte";
    import "../../global.css"; 
</script>



<section>
    <SearchSeries/>
    <PopularSeries {series}/>
</section>