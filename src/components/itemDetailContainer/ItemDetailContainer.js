import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { UiContext } from '../../context/UiContext'
import { getFirestore } from '../../firebase/config'
import { Loader } from '../Loader/Loader'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)
    
    const {loading, setLoading} = useContext(UiContext)

    const {productId} = useParams()


    useEffect( () => {

        setLoading(true)

        const db = getFirestore()
        const products = db.collection('Productos')

        const product = products.doc(productId)

        product.get()
            .then( (response) => {
                setProduct({
                    id: response.id,
                    ...response.data()
                })
            })
            .catch( (error) => console.log(error) )
            .finally( () => {
                setLoading(false)
            })


    }, [productId, setLoading] )
    
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