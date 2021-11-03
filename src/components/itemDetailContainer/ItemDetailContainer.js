import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { UiContext } from '../../context/UiContext'
import { askProducts } from '../../helpers/askProducts'
import { Loader } from '../Loader/Loader'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)
    
    const {loading, setLoading} = useContext(UiContext)

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
                loading 
                ? <Loader/>
                : <ItemDetail {...product} />
            }
        </div>
    )
}