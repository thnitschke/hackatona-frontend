import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { postTime } from '../services';
import { showNotification } from '../components/notification';

export default class CadastroTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
        };
    }

    async handleSaveTime() {
        if (!this.state.nome) {
            showNotification("Informar o nome do time é obrigatório", "Erro!", "danger")
            return
        }
        let response = await postTime(this.state.nome)
        if (response)
            this.props.history.push({
                pathname: '/integrantes',
                state: { dados: response.data.content.Time }
            })
    }
    handleChange(event) {
        this.setState({ nome: event.target.value });
    }

    render() {
        return (
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{ marginTop: '10px' }}>
                <Grid item xs={12} >
                    <Typography variant="h4" >
                        Novo time
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <TextField label="Nome do time" variant="outlined" size="small" onChange={(event) => this.handleChange(event)} />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ textTransform: "none" }}
                        onClick={() => this.handleSaveTime()}
                    >
                        Salvar
                    </Button>
                </Grid>
            </Grid>
        );
    }


}







