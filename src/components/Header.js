import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: -1,
            header: null,
        };
    }

    setHeaderAdmin() {
        return (
            <AppBar position="static">
                <Tabs aria-label="simple tabs example">
                    <Tab component={Link} to={'/alunos'} label="Alunos" />
                    <Tab component={Link} to={'/times'} label="Times" />
                    <Tab component={Link} to={'/resultados'} label="Resultados" />
                    <Tab component={Link} to={'/'} label="Sair" onClick={() =>  sessionStorage.clear()}/>
                </Tabs>
            </AppBar>
        )
    }

    setHeaderAvaliador() {
        return (
            <AppBar position="static">
                <Tabs aria-label="simple tabs example">
                    <Tab component={Link} to={'/avaliacao'} label="Avaliação" />
                    <Tab component={Link} to={'/resultados'} label="Resultados" />
                    <Tab component={Link} to={'/'} label="Sair" onClick={() =>  sessionStorage.clear()}/>
                </Tabs>
            </AppBar>
        )
    }


    async componentDidUpdate() {
        console.log("entrou")
        const value = await sessionStorage.getItem("tipoUsuario")
        if (this.state.value != value)
         this.setState({
                value: value,
                header: value == 1 ? this.setHeaderAdmin() : value == 2 ? this.setHeaderAvaliador() : null
         }) 
    }

    render() {
        return (
            <>
        {this.state.header}
        {this.props.children}
        </>
        )
    }
}