<script>
    let count = 0;

    function incrementBtn (){
        count += 1;
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>
    Number:{count}
</h2>
<button on:click={incrementBtn}>click to increase</button>

<a href="/about">go to about </a>