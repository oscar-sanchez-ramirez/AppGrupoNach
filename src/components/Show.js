import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import { areaName } from '../helpers/areaName';
import { useFetch } from '../hooks/useFetch';
import { Loading } from './Loading';



export const Show = () => {

    const { id } = useParams();

    const baseURL = process.env.REACT_APP_API_URL;
    const { data } = useFetch(`${baseURL}/${id}`);



    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 mt-5">
                    {
                        !!data ?
                            (<motion.div
                                className="card mt-5 shadow"
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className="card-body">

                                    <div>
                                        <p className="text-end text-primary"><i className="fas fa-layer-group"></i> {areaName(data.area_id)}</p>
                                        <hr size="4" />
                                        <h5 className="text-muted mt-5"><i className="fas fa-user"></i> {data.name}</h5>
                                        <p className="text-muted"><i className="fas fa-envelope-square"></i> {data.email}</p>
                                        <p className="text-muted text-justify"><b>Dirección:</b> {data.address}</p>
                                    </div>
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
