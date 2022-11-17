    export const load = async ({fetch}) => {
        const res = await fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=bdae2e5d0472348ff8d9f2eb7c55695e`
            );
        const data = await res.json()
        if(res.ok){
            return{
               props: {popular: data.results}
            }
        }
    };
    
