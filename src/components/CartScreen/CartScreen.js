import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link, Redirect } from 'react-router-dom'
import './CartScreen.css'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)

    return (
        <div className="container my-5">

            {
                carrito.length === 0
                ?
                    <>
                        <Redirect to="/"/>
                    </>
                :
                    <>

                        <h2>Cart</h2>
                        <hr/>

                        {
                            carrito.map( (prod) => (
                                <>
                                <div className="row productInCartContainer">
                                    <img className="img col-1"src={prod.img} alt={prod.name}/>
                                    <h4 className="col-4">{prod.name}</h4>
                                    <p className="col-2">Quantity: {prod.quantity}</p>
                                    <p className="col-2">Price: {prod.price * prod.quantity}</p>
                                    <button className="btn btn-danger col-2" onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill/>
                                    </button>
                                </div>
                                <hr/>
                                </>
                            ))
                        }

                        <h2 className="total">Total: ${calcularTotal()}</h2>
                        <div className="eraseAndCheckoutButtons">
                            <button 
                                className="btn btn-danger my-2"
                                onClick={vaciarCarrito}
                                >
                                Empty Cart
                            </button>

                            <Link to="/products/checkout" className="btn btn-success mx-3">
                                Go to checkout!
                            </Link>
                        </div>
                    </>
            }

        </div>
    )
}