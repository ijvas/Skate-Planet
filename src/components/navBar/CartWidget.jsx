import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const { calcularCantidad } = useContext(CartContext)

    return (
        <>
            <span className="material-icons">
                shopping_cart
            </span>
            <span>{calcularCantidad()}</span>
        </>
    )
}