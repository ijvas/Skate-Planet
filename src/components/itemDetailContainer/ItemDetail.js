import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import '../itemDetailContainer/ItemDetail.css'

export const ItemDetail = ({id, name, description1, description2, description3, description4, description5, price, img, category, stock}) =>{

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [quantity, setQuantity] = useState(0)

    const handleAgregar = () => {

        const newItem = {
            id,
            name,
            price,
            category,
            quantity,
            img
        }

        if (quantity > 0) {
            addToCart(newItem)
        }
    }
    

    return(
        <>
            <div className="row productDetailContainer">
                <div className="productImageDetail col-sm-12 col-md-6">
                    <img src={img} alt={name}/>
                </div>
                <div className="productDetails col-sm-12 col-md-6">
                    <h2 className="name">{name}</h2>
                    <h4 className="price">$ {price}.00</h4>
                    <ul className="descriptions">
                        {description1 ? <li>{description1}</li> : 'There are not descriptions added yet'}
                        {description2 ? <li>{description2}</li> : ''}
                        {description3 ? <li>{description3}</li> : ''}
                        {description4 ? <li>{description4}</li> : ''}
                        {description5 ? <li>{description5}</li> : ''}
                    </ul>
                    

                    { isInCart(id)
                        ? <Link to="/products/cart" className="btn btn-success">Finish Shopping</Link> 
                        
                        :
                        <>
                                <ItemCount quantity={quantity} modifyQuantity={setQuantity} maxStock={stock}/>
                                <button
                                    className={`mt-3 btn ${quantity === 0 ? "btn-danger desactivado" : "btn-primary"}`}
                                    onClick={handleAgregar}
                                    >
                                    Add!
                                </button>
                            </>
                    }

                    <hr/>
                    <button className="btn btn-primary" onClick={ () => goBack()}>Go Back</button>
                    <button className="btn btn-primary backButton" onClick={ () => push("/")}>Back to Start</button>
                </div>
            </div>
        </>
    )
}