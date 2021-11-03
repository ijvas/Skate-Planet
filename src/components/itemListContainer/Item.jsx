import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export const Item = ( {product}) => {
    return(
        <Card style={{ width: '18rem' }} className="m-4">
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                ${product.price}
                </Card.Text>
                <Link to={`/detail/${product.id}`}>
                    <Button variant="primary">Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}