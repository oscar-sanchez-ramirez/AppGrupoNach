import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Loading } from '../Loading';
import { motion } from 'framer-motion'
import { CuerpoNach } from './CuerpoNach';

export const GrupoNach = () => {

    const baseURL = process.env.REACT_APP_API_URL;
    const { data } = useFetch(`${baseURL}/steps`);
    // console.log(!!data && data);

    const [siguiente, setSiguiente] = useState(1);

    const handleSiguiente = () => {
        if (siguiente < 3) {
            setSiguiente(siguiente + 1);
        } else {
            setSiguiente(1);
        }
    }



    return (
        <div className="container mb-5 mt-5">
            <div className="row justify-content-center mt-5 mb-5">
                {
                    !!data ?
                        (
                            data.data.map(item => (
                                <motion.div
                                    className="col-md-4"
                                    key={item.id}
                                    initial={{ x: -200, opacity: 0.2 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ type: 'spring', stiffness: 100 }}
                                >
                                    <div className="card shadow mb-4">
                                        <div className="card-body p-0 m-0">
                                            <div className="text-center">
                                                <img src={item.imagenTitulo} alt={item.autor} className="img-fluid" />
                                                <img src={item.imagenUsuario} alt={item.autor} className="img-fluid rounded-circle" width="40" />
                                            </div>
                                            <div className="container">
                                                <div className="p-2">
                                                    <p className="text-justify ">{item.descripcion}</p>
                                                    <p className="text-end text-muted "><small>{item.autor}</small></p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 text-center">
                                                        <p ><i className="fas fa-heart"></i> {item.meGusta}</p>
                                                    </div>
                                                    <div className="col-md-4 text-center">
                                                        <p><i className="fas fa-archive"></i> {item.comentario}</p>
                                                    </div>
                                                    <div className="col-md-4 text-center">
                                                        <p><i className="fas fa-eye"></i> {item.vistas}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )
                        :
                        <Loading />
                }
            </div>
            <div className="row">
                <CuerpoNach id={siguiente} />
                <div className="col-md-2">
                    <button
                        className="btn btn-sm btn-outline-success mt-2"
                        onClick={handleSiguiente}
                    >
                        Siguiente <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
