import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import Swal from 'sweetalert2'
import { useForm } from '../../hooks/useForm';


export const Contacto = () => {

    const [values, handleInputChange, handleReset] = useForm({ de: '' });
    const { de } = values;


    const [state, setstate] = useState('');
    const [error, setError] = useState('');

    const baseURL = process.env.REACT_APP_API_URL;
    useFetch(`${baseURL}/${state}?de=${de}`);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (de < 5) {
            setError('El correo es requerido');
            return false
        }


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
                setError('');
                handleReset();
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
            <h1 className="text-center text-muted mt-4">Contacto</h1>
            <form className="row justify-content-center" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="col-auto mt-2">
                                <small className="text-danger">{error}</small>
                                <input type="email" className="form-control mb-2" placeholder="tu@email.com" name="de" value={de} onChange={handleInputChange} />
                                <button type="submit" className="btn btn-primary mb-3">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
