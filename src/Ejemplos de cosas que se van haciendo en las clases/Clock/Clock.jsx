import React, { useState } from 'react'

export const Clock = () => {

    const [time, setTime] = useState( new Date() )

    // console.log(time)

    const handleTime = () => {
        setTime( new Date() )
    }

    return (

        <div onClick={handleTime}>
            <h3>{time.toLocaleString()}</h3>
        </div>

    )
}