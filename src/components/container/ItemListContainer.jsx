import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { stock } from '../../Stock/Stock'
import { Loader } from '../Loader/Loader'
import { askProducts } from '../../helpers/askProducts'
import { ItemList } from './ItemList'

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
        <section className="container">
            {
                loading 
                    ? <Loader/> 
                    : <ItemList products={products}/>
            }
        </section>
    )
}