import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import CadastroAlunos from '../views/CadastroAlunos';
import ListaTimes from '../views/ListaTimes';
import CadastroTime from '../views/CadastroTime'
import ListaIntegrantes from '../views/ListaIntegrantes';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FichaAvaliacao from "../views/FichaAvaliacao";
import Resultados from '../views/Resultados';

export default function Routes() {

    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <AppBar position="static">
                <Tabs aria-label="simple tabs example">
                    <Tab component={Link} to={'/alunos'} label="Alunos" />
                    <Tab component={Link} to={'/times'} label="Times" />
                    <Tab component={Link} to={'/avaliacao'} label="Avaliação" />
                    <Tab component={Link} to={'/resultados'} label="Resultados" />
                </Tabs>
            </AppBar>
            <Switch>
                <Route exact path="/alunos" component={CadastroAlunos}/>
                <Route exact path="/times" component={ListaTimes}/>
                <Route exact path="/times/cadastro" component={CadastroTime}/>
                <Route exact path="/integrantes" component={ListaIntegrantes}/>
                <Route exact path="/avaliacao" component={FichaAvaliacao}/>
                <Route exact path="/resultados" component={Resultados}/>
            </Switch>
        </Router>
    );
}
