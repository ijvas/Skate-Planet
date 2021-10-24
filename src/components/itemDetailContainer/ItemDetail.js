import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, description, price, img, category, stock}) =>{

    const {goBack, push} = useHistory()

    const [quantity, setQuantity] = useState(0)

    const addToCart = () => {

        const newItem = {
            id,
            name,
            price,
            category,
            quantity
        }

        console.log('Agregado: ', newItem)
    }
    

    return(
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>{price}</h4>
            
            {/* opción de compra / contador  */}

            <ItemCount quantity={quantity} modifyQuantity={setQuantity} maxStock={stock}/>
            <button
                className="btn btn-success mt-3"
                onClick={addToCart}
            >
                Agregar
            </button>

            <hr/>
            <button className="btn btn-primary" onClick={ () => goBack()}>Go Back!</button>
            <button className="btn btn-primary" onClick={ () => push("/")}>Back to Start!</button>
        </div>
    )
}