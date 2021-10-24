import React, { useEffect, useState } from 'react'

export const ClickTrackerDos = () => {
    
    const [coord, setCoord] = useState({x: 0, y: 0})

    const handleClick = (e) => {

        console.log(e)

        setCoord({
            x: e.x,
            y: e.y
        })
    }

    useEffect ( () => {

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }

    }, [])
    
    return (
        <div 
            className="container"
        >

            <hr/>
            <h3>X: {coord.x}</h3>
            <h3>Y: {coord.y}</h3>
        </div>
    )
}