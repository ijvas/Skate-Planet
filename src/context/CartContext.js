import React, { createContext, useEffect, useState } from 'react'



export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(init)

    const addToCart = (item) => {
        setCarrito( [...carrito, item] )
    }
  
    const removeItem = (itemId) => {
      const newCart = carrito.filter( (prod) => prod.id !== itemId)
      setCarrito( newCart )
    }
  
    const calcularCantidad = () => {
      return carrito.reduce( (acc, prod) => acc + prod.quantity, 0 )
    }

    const isInCart = (itemId) => {
      return carrito.some( (prod) => prod.id === itemId)
    }
  
    const vaciarCarrito = () => {
      setCarrito( [] )
    }

    const calcularTotal = () => {
      return carrito.reduce( (acc, prod) => acc + prod.quantity * prod.price, 0)
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])


    return (
        <CartContext.Provider value={{
            carrito,
            addToCart,
            removeItem,
            calcularCantidad,
            isInCart,
            vaciarCarrito,
            calcularTotal
        }}>
            { children }
        </CartContext.Provider>
    )
}