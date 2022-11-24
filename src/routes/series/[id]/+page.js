export const load = async ({fetch, params}) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=bdae2e5d0472348ff8d9f2eb7c55695e&language=en-US`
        );
    const data = await res.json()
    if(res.ok){
        return{
           props: { data}
        }
    }
};

