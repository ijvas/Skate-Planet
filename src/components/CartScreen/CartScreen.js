import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)

    return (
        <div className="container my-5">

            {
                carrito.length === 0
                ?
                    <>
                        <h2>Aún no hay productos agregados al carrito</h2>
                        <Link to="/products" className="btn btn-success">Volver a productos</Link>
                    </>
                :
                    <>

                        <h2>Resumen de compra</h2>
                        <hr/>

                        {
                            carrito.map( (prod) => (
                                <div>
                                <h4>{prod.name}</h4>
                                    <img src={prod.img} alt={prod.name}/>          {/* CONSULTAR COMO AGREGAR LA IMAGEN ACA */}
                                    <p>Cantidad: {prod.quantity}</p>
                                    <p>Precio: {prod.price * prod.quantity}</p>
                                    <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill/>
                                    </button>
                                    <hr/>
                                </div>
                            ))
                        }

                        <button 
                            className="btn btn-primary my-2"
                            onClick={vaciarCarrito}
                            >
                            Vaciar Carrito
                        </button>
                        <hr />
                        <h2>Total: ${calcularTotal()}</h2>

                    </>
            }

        </div>
    )
}