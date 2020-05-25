import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import {postCadastraTime} from '../services/index'

export default class CadastroTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
        };
    }

    async handleClickCadastrar(){
        if(this.state.nome) {
            await postCadastraTime(this.state.nome)
            this.props.history.push("/times")
        }
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
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        color="primary"  
                        style={{textTransform:"none"}}
                        onClick={() => this.handleClickCadastrar()}
                    >
                        Salvar
                    </Button>
                </Grid>
            </Grid>
      );
    }


}






