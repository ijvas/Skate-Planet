import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { GiSkateboard, GiClothes } from 'react-icons/gi'


export const SideBarData = [
    {
        title:'Home',
        path: '/',
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Boards',
        path: '/boards',
        icon: <GiSkateboard/>,
        cName: 'nav-text'
    },
    {
        title:'Apparel',
        path: '/apparel',
        icon: <GiClothes/>,
        cName: 'nav-text'
    },
]
