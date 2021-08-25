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
import { Show } from '../components/Show';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />


                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/show/:id" component={Show} />
                    <Route exact path="/create" component={Create} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
