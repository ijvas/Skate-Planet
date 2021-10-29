import React, { useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { Loader } from '../Loader/Loader'
import { askProducts } from '../../helpers/askProducts'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'
import { UiContext } from '../../context/UiContext'

export const ItemListContainer = () =>{

    const [products, setProducts] = useState( [] )
    
    const {loading, setLoading} = useContext(UiContext)


    const {categoryId} = useParams()


    useEffect( () => {

        setLoading(true)

        askProducts()
            .then((response) => {

                if (categoryId) {
                    
                    setProducts( response.filter( prod => prod.category === categoryId) )
                } else {
                    setProducts( response )
                }
            })
            .catch((error) => {
                setProducts([])
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId] )

    
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