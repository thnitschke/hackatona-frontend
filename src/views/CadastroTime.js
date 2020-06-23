import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {postCadastraTime} from '../services/index'
import ListaIntegrantes from './ListaIntegrantes';

export default class CadastroTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
        };
    }

    handleChange(event){
        this.setState({ nome: event.target.value });
    }

    render() {
        return (
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{marginTop: '10px'}}>
                <Grid item xs={12} >
                    <Typography variant="h4" >
                        Novo time
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <TextField  label="Nome do time" variant="outlined" size="small" onChange={(event) => this.handleChange(event)}/>
                </Grid>
                <ListaIntegrantes hideTitle={true}/>
            </Grid>
      );
    }


}







