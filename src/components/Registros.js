import React from 'react'
import PropTypes from 'prop-types';
import { areaName } from '../helpers/areaName';
import { motion } from 'framer-motion'


export const Registros = ({ name, email, area }) => {


    return (
        <motion.div
            className="card shadow"
            initial={{ y: 100, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <div className="card-body">
                <p className="text-end text-primary"><small><i className="fas fa-layer-group"></i> {areaName(area)}</small></p>
                <p className="m-0 p-1"><i className="fas fa-user"></i> {name}</p>
                <p className="m-0 p-1"><i className="fas fa-envelope-square"></i> {email}</p>
            </div>
        </motion.div>
    )
}

Registros.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    area: PropTypes.number.isRequired
}
