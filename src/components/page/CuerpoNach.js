import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { motion } from 'framer-motion'


export const CuerpoNach = ({ id, siguienteF }) => {

    const baseURL = process.env.REACT_APP_API_URL;
    const { data } = useFetch(`${baseURL}/steps/${id}`);
    console.log(!!data && data);

    const { data: datos } = useFetch(`${baseURL}/listar`);
    console.log(!!datos && datos);


    return (
        <>
            <motion.div
                className="col-md-5 text-center"
                initial={{ x: -400, opacity: 0.2 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                {!!data &&
                    (
                        <div>
                            <h2 className="text-start"><b>| {data.descripcion}</b></h2>
                            <div className="card shadow-sm">
                                <div className="card-body p-0 m-0">
                                    <img className="img-fluid" src={data.imagenTitulo} alt={data.autor} height="400" />
                                    <p className="text-start p-2">{data.descripcionLarga}</p>
                                </div>
                                <div className="p-4">
                                    <button
                                        className="btn btn-sm btn-outline-success mt-2"
                                        onClick={siguienteF}
                                    >
                                        Siguiente <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </motion.div>
            <div className="col-md-3 text-center">
            </div>

            <div className="col-md-4 text-center">
                {!!data &&
                    <div className="card mb-3 shadow-sm" style={{ maxWidth: '500px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={data.imagenUsuario} className="img-fluid rounded-circle m-2 shadow" alt={data.autor} width="80" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body ">
                                    <h5 className="card-title">{data.autor}</h5>
                                    <p className="text-muted"><small>GRUPO NACH</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <p className="text-center"><b>Tambien te puede interesar:</b></p>
                {
                    !!datos &&
                    (
                        datos.map((item, index) => (
                            <div className="row" key={item.id}>
                                <div className="col-md-12">
                                    <div className="card mt-2 shadow-sm">
                                        <p className="text-center"> {datos[index].servicio}</p>
                                    </div>
                                </div>
                            </div>
                        ))

                    )
                }
                <p className="text-end mt-5 m-0 p-0"><small>Fuentes: www.reclutamientoenlinea.com</small></p>
                <p className="text-end m-0 p-0"><small>www.blablabla.com.mx</small></p>
                <p className="text-end m-0 p-0"><small>Por Maneli Cornejo</small></p>

            </div>
        </>

    )
}
