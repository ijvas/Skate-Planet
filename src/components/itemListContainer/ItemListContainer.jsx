import React, { useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { Loader } from '../Loader/Loader'
// import { askProducts } from '../../helpers/askProducts'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'
import { UiContext } from '../../context/UiContext'
import { getFirestore } from '../../firebase/config'

export const ItemListContainer = () =>{

    const [products, setProducts] = useState( [] )
    
    const {loading, setLoading} = useContext(UiContext)


    const {categoryId} = useParams()


    // useEffect( () => {

    //     setLoading(true)

    //     askProducts()
    //         .then((response) => {

    //             if (categoryId) {
                    
    //                 setProducts( response.filter( prod => prod.category === categoryId) )
    //             } else {
    //                 setProducts( response )
    //             }
    //         })
    //         .catch((error) => {
    //             setProducts([])
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }, [categoryId, setLoading] )


    useEffect( () => {

        setLoading(true)

        const db = getFirestore()
        const stock = categoryId
                      ? db.collection('Productos').where('category', '==', categoryId)
                      : db.collection('Productos')
        
        stock.get()
            .then( (response) => {
                const newProducts = response.docs.map( (doc) => {
                    return {id: doc.id, ...doc.data()}
                })

                setProducts(newProducts)
            })
            .catch( error => console.log(error))
            .finally( () => {
                setLoading(false)
            })

    }, [categoryId, setLoading] )
    
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