import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import CadastroAlunos from '../views/CadastroAlunos';
import CadastroTimes from '../views/CadastroTimes';
import FichaAvaliacao from '../views/FichaAvaliacao';
import EditarTimes from '../views/EditarTimes';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Routes() {

    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <AppBar position="static">
                <Tabs aria-label="simple tabs example">
                    <Tab component={Link} to={'/alunos'} label="Alunos" />
                    <Tab component={Link} to={'/times'} label="Times" />
                    <Tab component={Link} to={'/avaliacao'} label="Avaliação" />
                </Tabs>
            </AppBar>
            <Switch>
                <Route exact path="/alunos" component={CadastroAlunos}/>
                <Route exact path="/times" component={CadastroTimes}/>
                <Route exact path="/avaliacao" component={FichaAvaliacao}/>
                <Route exact path="/times/editar" component={EditarTimes}/>
            </Switch>
        </Router>
    );
}
