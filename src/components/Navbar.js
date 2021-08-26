import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo_nach.png';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
            <div className="container-fluid">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    <img src={logo} alt="Grupo Nach" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" >GRUPO NACH</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/servicios" className="nav-link active" >SERVICIOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bolsaTrabajo" className="nav-link active" >BOLSA DE TRABAJO</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link active" >CONTACTO</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <Link to="/home" className="nav-link active text-white" ><i className="fas fa-user"></i></Link>
                </div>
            </div>
        </nav>
    )
}
