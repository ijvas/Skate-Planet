import React from 'react'


 
export const ItemCount = ( {quantity, modifyQuantity, maxStock} ) => {

    const handleResta = () => {

        if ( quantity > 0) {
            modifyQuantity(quantity - 1)
        }

    }

    const handleSuma = () => {
        
        if ( quantity < maxStock ) {
            modifyQuantity(quantity + 1)
        }

    }

    return (
        <div>

            <button
                onClick={handleResta}
                className={`btn ${quantity === 0 ? "btn-danger desactivado" : "btn-primary"}`}
            >
                -
            </button>

            <span className="m-2">{quantity}</span>
            
            <button
                onClick={handleSuma}
                className={`btn ${quantity === maxStock ? "btn-danger desactivado" : "btn-primary"}`}
            >
                +
            </button>

        </div>
    )

}