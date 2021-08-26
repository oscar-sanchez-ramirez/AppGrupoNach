import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'
import axios from 'axios';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const Create = ({history}) => {

    const baseURL = process.env.REACT_APP_API_URL;
    const MySwal = withReactContent(Swal)

    const [values, handleInputChange, handleReset] = useForm({
        name: '',
        email: '',
        address: '',
        area_id: null
    });

    const { name, email, address, area_id } = values;

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [areaError, setAreaError] = useState('')

    const handleSubmit = async (e) => {

        e.preventDefault();

        const f = new FormData();

        if ((name.length > 2) && (name.length < 200)) {
            f.append('name', name);
            setNameError('');
        } else {
            setNameError('Nombre es requerido');
        }

        if ((email.length > 6) && (email.length < 200)) {
            f.append('email', email);
            setEmailError('')
        } else {
            setEmailError('El correo electrónico es requerido')
        }

        if (address.length > 0) {
            f.append('address', address);
        }

        if (area_id === null) {
            setAreaError('El área es requerida');
        }

        if (area_id === "false") {
            f.append('area_id', 2);
            setAreaError('');
        }

        if (area_id === "true") {
            f.append('area_id', 1);
            setAreaError('');
        }

        if ((name.length > 2) && (email.length > 6)) {

            try {

                const res = await axios.post(baseURL, f, { headers: { "Content-Type": "multipart/form-data" } })
                const info = await res.data;
                console.log(info);
                if (info) {
                    handleReset();
                    MySwal.fire({
                        didOpen: () => {
                            MySwal.clickConfirm()
                        }
                    }).then(() => {
                        return MySwal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Se guardo con éxito',
                            showConfirmButton: false,
                            timerProgressBar: true,
                            timer: 1500
                        })
                    })
                }
            } catch (error) {
                console.log(error);
                MySwal.fire({
                    didOpen: () => {
                        MySwal.clickConfirm()
                    }
                }).then(() => {
                    return MySwal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'El correo ya fue registrado',
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 1500
                    })
                })
            }

        }



    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                    <div className="card shadow mb-5">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" value={name} onChange={handleInputChange} name="name" className="form-control" placeholder="nombre" />
                                <p className="m-0 p-0 text-danger">{nameError}</p>

                                <label htmlFor="email" className="form-label mt-4">Correo Electrónico</label>
                                <input type="email" value={email} onChange={handleInputChange} name="email" className="form-control" placeholder="nombre@ejemplo.com" />
                                <p className="p-0 m-0 text-danger">{emailError}</p>

                                <label htmlFor="address" className="form-label mt-4">Dirección</label>
                                <textarea value={address} onChange={handleInputChange} name="address" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                                <div className="form-check mt-4">
                                    <p className="text-center text-danger">{areaError}</p>
                                    <input className="form-check-input" type="radio" value="false" onChange={handleInputChange} name="area_id" id="area1" />
                                    <label className="form-check-label" htmlFor="area1">
                                        Recursos Humanos
                                    </label>
                                </div>

                                <div className="form-check mt-4">
                                    <input className="form-check-input" type="radio" value="true" onChange={handleInputChange} name="area_id" id="area2" />
                                    <label className="form-check-label" htmlFor="area2">
                                        Sistemas
                                    </label>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-sm btn-outline-primary mt-4" ><i className="fas fa-save"></i> Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
