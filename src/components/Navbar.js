import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
            <div className="container">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                  <i className="fas fa-home"></i>  Inicio
                </Link>
            </div>
        </nav>
    )
}
