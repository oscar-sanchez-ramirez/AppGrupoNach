import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import Swal from 'sweetalert2'


export const Contacto = () => {

    const [state, setstate] = useState('')
    const baseURL = process.env.REACT_APP_API_URL;
    const { data } = useFetch(`${baseURL}/${state}`);
    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            title: '¿Estás seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setstate('contactanos');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Correo enviado',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    }


    return (
        <div className="container">
            <h1 className="text-center text-muted mt-5">Contacto</h1>
            <form className="row justify-content-center" onSubmit={handleSubmit}>
                <div className="col-auto mt-5">
                    <button type="submit" className="btn btn-primary mb-3">Contactar</button>
                </div>
            </form>
        </div>
    )
}
