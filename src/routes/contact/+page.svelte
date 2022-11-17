<script  >
    let count = 0;

    function incrementBtn (){
        count += 1;
    }
</script>

<h2>
    Number:{count}
</h2>
<button on:click={incrementBtn}>click to increase</button>

<a href="/about">go to about </a>