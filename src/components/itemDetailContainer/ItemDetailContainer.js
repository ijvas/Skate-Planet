import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { askProducts } from '../../helpers/askProducts'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    const {productId} = useParams()

    useEffect( () => {
        setLoading(true)

        askProducts()
            .then( response => {
                setProduct( response.find( prod => prod.id === Number(productId)) )
            })
            .finally( () => {
                setLoading(false)
            })
    }, [productId])
    
    return (
        <div className="container mt-5">
            {
                loading ? <h2>Cargando...</h2>
                : <ItemDetail {...product} />
            }
        </div>
    )
}