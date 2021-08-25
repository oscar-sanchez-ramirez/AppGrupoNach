import React from 'react'
import { Inicio } from './components/Inicio'
import './css/main.css'

export const App = () => {

    return (
        <div className="container-fluid mt-5">
            <h1 className="text-center text-muted">GRUPO NACH</h1>
            <Inicio />
        </div>
    )
}

