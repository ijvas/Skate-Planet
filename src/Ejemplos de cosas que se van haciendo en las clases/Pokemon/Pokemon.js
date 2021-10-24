import React, { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader/Loader'
import { getPokemons } from './getPokemons'

export const Poke = () => {

    const [pokemon, setPokemon] = useState(null)
    const [busqueda, setBusqueda] = useState('')
    const [id, setId] = useState(1)
        
    
    useEffect( () => {

        setPokemon(null)
        
        getPokemons(id)
            .then( response => {
                setPokemon(response)
            })
            .catch( (error) => {
                setPokemon(error)
            })

            
    }, [id])

    const handleNext = () => {
        id < 1118 && setId( id + 1)
    }

    const handlePrevious = () => {
        id > 1 && setId( id - 1)
    }

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (busqueda.length > 2) {
            getPokemons(busqueda)
                .then( response => {
                    setPokemon(response)
                    setId(response.id)
                })
        }
    }

    return(
        <div className="container my-5">
            <h2>Pokemon</h2>
            <hr/>
            {
                !pokemon ? <Loader/>
                         :
                <>
                    <h3>{pokemon.name}</h3>
                    <button className="btn btn-primary" onClick={handlePrevious} >Previous!</button>
                    <img src={pokemon.img} alt={pokemon.name}/>
                    <button className="btn btn-primary" onClick={handleNext} >Next!</button>
                </>
            }


            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    value={busqueda}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}