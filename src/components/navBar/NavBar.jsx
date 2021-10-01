import React from 'react'
import './navbar.css'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
        <nav id="navBar">
            <li><a href="#">Skate Planet</a></li>

            <li className="categoria">
                
                <a href="#">Indumentaria</a>

                <ul className="categorias">
                    <li>Remeras</li>
                    <li>Pantalones</li>
                    <li>Zapatillas</li>
                </ul>

            </li>

            <li className="categoria">
                
                <a href="#">Accesorios</a>
                
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

