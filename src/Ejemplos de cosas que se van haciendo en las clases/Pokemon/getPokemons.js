
export const getPokemons = (query) => {
    return new Promise( (resolve, reject) => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
            .then( (response) => response.json() )
            .then( (data) => {

                resolve({
                    id: data.id,
                    name: data.name,
                    img: data.sprites.front_default   
                })

            })
            .catch( (error) => {
                reject({
                    error: "Pokemon no encontrado"
                })
            })
    })
}