import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import Login from '../views/Login';
import ListaAlunos from '../views/ListaAlunos';
import ListaTimes from '../views/ListaTimes';
import CadastroTime from '../views/CadastroTime'
import ListaIntegrantes from '../views/ListaIntegrantes';
import FichaAvaliacao from "../views/FichaAvaliacao";
import Resultados from '../views/Resultados';
import CadastroAlunos from '../views/CadastroAlunos';
import Header from '../components/Header'

export default function Routes() {

    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Switch>
                <Header>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/alunos" component={ListaAlunos} />
                    <Route exact path="/alunos/cadastro" component={CadastroAlunos} />
                    <Route exact path="/times" component={ListaTimes} />
                    <Route exact path="/times/cadastro" component={CadastroTime} />
                    <Route exact path="/integrantes" component={ListaIntegrantes} />
                    <Route exact path="/avaliacao" component={FichaAvaliacao} />
                    <Route exact path="/resultados" component={Resultados} />
                </Header>
            </Switch>
        </Router>
    );
}
