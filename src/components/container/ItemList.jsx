import React from 'react'
import { Item } from './Item'


export const ItemList = ( {products = []} ) => {
    return(
        <div className="container">
            <h2>Nuestros Productos</h2>
            <hr />

            <div className="row">
                { products.map((product) => <Item product={product} key={product.id}/> )}
            </div>
        </div>
    )
}