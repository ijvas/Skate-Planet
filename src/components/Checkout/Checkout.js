import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { UiContext } from '../../context/UiContext'
import { Loader } from '../Loader/Loader'
import { createOrder } from '../../firebase/createOrder'

export const Checkout = () => {

    const {loading, setLoading} = useContext(UiContext)

    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState( {
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(values.nombre.length < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid name',
                text: 'You have not registered your name correctly',
            })
            return
        }

        if(values.apellido.length < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid last name',
                text: 'You have not registered your last name correctly',
            })
            return
        }

        if(values.email.length < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid E-mail',
                text: 'You have not registered an E-mail correctly',
            })
            return
        }

        if(values.telefono.length < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Telephone',
                text: 'You have not registered a phone correctly',
            })
            return
        }


        setLoading(true)
        
        createOrder(values, carrito, calcularTotal())
            .then( (response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registered order',
                    text: `Voucher: ${response}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
            .catch( (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Products without stock',
                    text: `There isn't stock of: ${error.map(el => el.name).join(', ')}`,
                })
            })
            .finally( () => {
                setLoading(false)
            })

    }


    return (

        <>

            {carrito.length === 0 && <Redirect to="/"/>}
            {loading && <Loader/>}

                <div>

                    <div className="container my-5">
                        <form onSubmit={handleSubmit} autocomplete="off">
                            <h3>Personal information</h3>
                            <input
                                className="form-control my-2"
                                type="text"
                                placeholder="Name"
                                name="nombre"
                                value={values.nombre}
                                onChange={handleInputChange}
                                ></input>
                            {values.nombre.length === 0 && <small>This field is required</small>}

                        <input
                                className="form-control my-2"
                                type="text"
                                placeholder="Last Name"
                                name="apellido"
                                value={values.apellido}
                                onChange={handleInputChange}
                                ></input>
                            {values.apellido.length === 0 && <small>This field is required</small>}

                            <input
                                className="form-control my-2"
                                type="tel"
                                placeholder="Telephone"
                                name="telefono"
                                value={values.telefono}
                                onChange={handleInputChange}
                                ></input>
                            {values.telefono.length === 0 && <small>This field is required</small>}

                            <input
                                className="form-control my-2"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                ></input>
                            {values.email.length === 0 && <small>This field is required</small>}

                            <br/>
                            <button 
                                className="btn btn-success"
                                type="submit"
                                disabled={loading}
                                >Checkout!</button>
                        </form>
                    </div>
                </div>
                
            

        </>
    )
}