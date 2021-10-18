import React from 'react'
import { Item } from './Item'


export const ItemList = ( {products = []} ) => {
    return(

        <div className="container mt-4">

            <div className="row">
                { products.map((product) => <Item product={product} key={product.id}/> )}
            </div>

        </div>
        
    )
}