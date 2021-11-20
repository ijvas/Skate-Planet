import React from 'react'
import './navbar.css'
import pageLogo  from '../navBar/pageLogo.png'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'
import { SideBar } from './SideBar'


export const NavBar = () => {
    return (
        <>
        <nav className="navBar">

            <SideBar className/>

            <Link to="/"><img src={pageLogo} alt="Brand Logo" className="navbar--img"/></Link>

            <Link to="/products/cart"><CartWidget/></Link>


        </nav>
        <hr className="hr"/>
        </>
    )
}

