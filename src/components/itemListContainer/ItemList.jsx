import React from 'react'
import { Item } from './Item'
import './ItemList.css'


export const ItemList = ( {products = []} ) => {
    return(

        <div className="cardsContainer">
            { products.map((product) => <Item product={product} key={product.id}/> )}
        </div>
        
    )
}