import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import '../itemDetailContainer/ItemDetail.css'

export const ItemDetail = ({id, name, description, price, img, category, stock}) =>{

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [quantity, setQuantity] = useState(0)

    const handleAgregar = () => {

        const newItem = {
            id,
            name,
            price,
            category,
            quantity
        }

        if (quantity > 0) {
            addToCart(newItem)
        }
    }
    

    return(
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>${price}</h4>
            

            { isInCart(id)
                ? <Link to="/cart" className="btn btn-success">Finish Shopping</Link> 
                
                :
                    <>
                        <ItemCount quantity={quantity} modifyQuantity={setQuantity} maxStock={stock}/>
                        <button
                            className={`mt-3 btn ${quantity === 0 ? "btn-danger desactivado" : "btn-primary"}`}
                            onClick={handleAgregar}
                            >
                            Agregar
                        </button>
                    </>
            }

            <hr/>
            <button className="btn btn-primary" onClick={ () => goBack()}>Go Back!</button>
            <button className="btn btn-primary" onClick={ () => push("/")}>Back to Start!</button>
        </div>
    )
}