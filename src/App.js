import React from 'react'
import { AppRouter } from './router/AppRouter'
import './css/main.css'

export const App = () => {

    return (
        <>
            <AppRouter />
            <div className="m-2 p-1 bg-light fixed-bottom text-center text-muted"><b>GRUPO NACH</b></div>
        </>
    )
}

