import React from 'react'
import './navbar.css'
import pageLogo  from '../navBar/pageLogo.png'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav id="navBar">

                
            <Link to="/products">Products</Link>
            <Link to="/products/boards">Boards</Link>

            <Link to="/"><img src={pageLogo} alt="Brand Logo"/></Link>

            <Link to="/products/apparel">Apparel</Link>
            <Link to="/contact">Contact Us!</Link>

            <Link to="/cart"><CartWidget/></Link>


        </nav>
    )
}

