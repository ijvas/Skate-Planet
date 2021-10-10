import React from 'react'
import './navbar.css'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
        <nav id="navBar">
            <li><button>Skate Planet</button></li>

            <li className="categoria">
                
                <button>Indumentaria</button>

                <ul className="categorias">
                    <li>Remeras</li>
                    <li>Pantalones</li>
                    <li>Zapatillas</li>
                </ul>

            </li>

            <li className="categoria">
                
                <button>Accesorios</button>
                
                <ul className="categorias">
                    <li>Tablas</li>
                    <li>Trucks</li>
                    <li>Lijas</li>
                </ul>

            </li>

            <CartWidget/>


        </nav>
    )
}

