import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { SideBarData } from './SideBarData'
import './SideBar.css'



export const SideBar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
            <div className="sideBar">
                <Link to="#" className="menu-bars">
                    <FaBars onClick={showSideBar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className="navBar-toggle">
                        <Link to="#" className="menu-x">
                            <AiOutlineClose/>
                        </Link>
                    </li>
                    {SideBarData.map( (item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}