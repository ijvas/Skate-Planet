import React from 'react'
import { useHistory } from 'react-router'

export const ItemDetail = ({id, name, description, price, img, category}) =>{

    const {goBack, push} = useHistory()
    

    return(
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>{price}</h4>
            
            {/* opción de compra / contador  */}


            <button className="btn btn-primary" onClick={ () => goBack()}>Go Back!</button>
            <button className="btn btn-primary" onClick={ () => push("/")}>Back to Start!</button>
        </div>
    )
}