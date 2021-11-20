import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'



export const Item = ( {product}) => {

    return(
        <Link to={`/detail/${product.id}`} className="cardTitle">
            <div className="cardContainer">
                <img src={product.img} className="cardImg" alt={product.name}/>
                <p>{product.name}</p>
            </div>
        </Link>
    )
}