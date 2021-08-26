import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Create } from '../components/Create';

import { Inicio } from '../components/Inicio';
import { Navbar } from '../components/Navbar';
import { BolsaTrabajo } from '../components/page/BolsaTrabajo';
import { Contacto } from '../components/page/Contacto';
import { GrupoNach } from '../components/page/GrupoNach';
import { Servicios } from '../components/page/Servicios';
import { Show } from '../components/Show';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />


                <Switch>
                    <Route exact path="/" component={GrupoNach} />
                    <Route exact path="/servicios" component={Servicios} />
                    <Route exact path="/bolsaTrabajo" component={BolsaTrabajo} />
                    <Route exact path="/contacto" component={Contacto} />


                    <Route exact path="/home" component={Inicio} />
                    <Route exact path="/show/:id" component={Show} />
                    <Route exact path="/create" component={Create} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
