import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import '../navBar/navbar.css'

export const CartWidget = () => {

    const { calcularCantidad } = useContext(CartContext)

    return (
        <div id="cartWidget" style={{visibility: calcularCantidad() === 0 ? "hidden" : "visible"}}>
            <span className="material-icons">
                shopping_cart
            </span>
            <span>{calcularCantidad()}</span>
        </div>
    )
}