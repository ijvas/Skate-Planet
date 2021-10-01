import React from 'react'
import './itemListContainer.css'

export const ItemListContainer = ({greeting}) =>{
    return (
        <div id="container">
            <h1>{greeting}</h1>
        </div>
    )
}