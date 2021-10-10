import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import './itemListContainer.css'
import { stock } from '../../Stock/Stock'
import { Loader } from '../Loader/Loader'
import { askProducts } from '../../helpers/askProducts'

export const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState( [] )
    const [loading, setLoading] = useState(false)
        

    useEffect( () => {

        setLoading(true)

        askProducts()
            .then((response) => {
                setProducts(response)
            })
            .catch((error) => {
                setProducts([])
            })
            .finally(() => {
                setLoading(false)
            })
    }, [] )

    
    return (
        <section id="container">
            {loading ? <Loader/> : <h1>{greeting}</h1>}
            <hr/>

            { products.map((product) => (
                    <div className="cards" key={product.id}>
                        <h2>{product.name}</h2>
                        <img className="productImg" src={product.img}/>
                        <p>{product.price}</p>
                    </div>
                ) 
            )}
        </section>
    )
}