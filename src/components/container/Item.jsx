import React from 'react'
import { Card, Button } from 'react-bootstrap'


export const Item = ( {product}) => {
    return(
        <Card style={{ width: '18rem' }} className="m-4">
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
                <Card.Text>
                ${product.price}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
}