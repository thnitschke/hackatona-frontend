import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import CadastroAlunos from '../views/CadastroAlunos';
import CadastroTimes from '../views/CadastroTimes';
import FichaAvaliacao from '../views/FichaAvaliacao';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/cadastro/alunos">
                    <CadastroAlunos />
                </Route>
                <Route exact path="/cadastro/times">
                    <CadastroTimes />
                </Route>
                <Route exact path="/ficha-avaliacao">
                    <FichaAvaliacao />
                </Route>
            </Switch>
        </Router>
    );
}
