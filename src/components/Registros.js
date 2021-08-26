import React from 'react'
import PropTypes from 'prop-types';
import { areaName } from '../helpers/areaName';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';


export const Registros = ({ id, name, email, area }) => {


    return (
        <motion.div
            className="card shadow mb-4"
            initial={{ y: 100, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <div className="card-body">
                <p className="text-end text-primary"><small><i className="fas fa-layer-group"></i> {areaName(area)}</small></p>
                <p className="m-0 p-1"><i className="fas fa-user"></i> {name}</p>
                <p className="m-0 p-1"><i className="fas fa-envelope-square"></i> {email}</p>
                <p className="text-end m-0 p-0"><Link className="btn btn-sm btn-outline-primary" title="Visualizar registro" to={`/show/${id}`} ><i className="fas fa-eye"></i></Link></p>
            </div>
        </motion.div>
    )
}

Registros.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    area: PropTypes.number.isRequired
}
