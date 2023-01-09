<script>

    let inputValue = '';
    let active = false ;

    function cancelInactive(){
        if(inputValue){
            active = true;
        }else{
            active = false ;
        }
    }
</script>

<form class="search">
    {#if !active}
        <label for="search_series"> search series </label>
    {/if}
    <input 
    on:blur={cancelInactive} 
    on:focus={() => (active = true)} 
    bind:value={inputValue} type="text" name="search_series" id="">
    {#if inputValue}
        <button>Search</button>
    {/if}
</form>

<style>
    .search{
        position: relative;
        width: 30%;
        margin: 1rem ;
    }
    
    button{
        font-size: 0.7rem;
        padding: 0rem 1rem;
        background: rgb(96, 110, 201);
        color: white;
        font-weight: bold;
        border: none;
        position: absolute;
        bottom: 50%;
        right: 0;
        transform: translate(0, 50%);
        height: 100%;
        cursor: pointer;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }
    input{
        height: 100%;
        width: 100%;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        background: rgb(73, 73, 73);
        color: white;
        font-weight: 100;
        border: none;
        transition: background 0.75s ease-out;
        border-radius: 50px;
        cursor: pointer;
    }
    input:focus{
        background: rgb(50,50,50);
    }

.search label{
    color: white;
    font-size: 1rem;
    font-weight: 100;
    position: absolute;
    top: 50%;
    left: 0;
    pointer-events: none;
    transform: translate(0, -50%);
    padding: 0rem 1rem;
}

</style>