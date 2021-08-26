import React from 'react'
import { AppRouter } from './router/AppRouter'
import './css/main.css'

export const App = () => {

    return (
        <>
            <AppRouter />
            <div className="m-0 p-3 bg-dark fixed-bottom text-center text-muted"></div>
        </>
    )
}

