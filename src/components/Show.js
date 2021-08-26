import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios';
import Swal from 'sweetalert2'


import { areaName } from '../helpers/areaName';
import { useFetch } from '../hooks/useFetch';
import { Loading } from './Loading';



export const Show = () => {

    const { id } = useParams();

    const baseURL = process.env.REACT_APP_API_URL;
    const { data } = useFetch(`${baseURL}/${id}`);




    const handleDelete = () => {

        Swal.fire({
            title: '¿Estás seguro?',
            text: "No se podra recuperar el registro!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`${baseURL}/${id}`);
                let timerInterval
                Swal.fire({
                    title: 'Auto close alert!',
                    html: 'I will close in <b></b> milliseconds.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('éxito')
                    }
                })
                setTimeout(() => {
                    window.location.replace("/");
                }, 1000)
            }
        })



    }



    return (
        <div className="container">
            <Link to="/" id="redir"></Link>
            <div className="row justify-content-center">
                <div className="col-md-7 mt-5">
                    {
                        !!data ?
                            (<motion.div
                                className="card mt-5 shadow"
                                initial={{ y: -100, opacity: 0.2 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 100 }}
                            >
                                <div className="card-body">
                                    <p className="text-end text-primary"><i className="fas fa-layer-group"></i> {areaName(data.area_id)}</p>
                                    <hr size="4" />
                                    <h5 className="text-muted mt-5"><i className="fas fa-user"></i> {data.name}</h5>
                                    <p className="text-muted"><i className="fas fa-envelope-square"></i> {data.email}</p>
                                    <p className="text-muted text-justify"><b>Dirección:</b> {data.address}</p>
                                    <p className="text-end"><button onClick={handleDelete} className="btn btn-sm btn-outline-danger">Borrar</button></p>
                                </div>
                            </motion.div>)
                            :
                            < Loading />
                    }
                </div>
            </div>
        </div>
    )
}
