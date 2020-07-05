import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Title from '../components/Title';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import {getTimes, deleteTime, postAbrirAvaliacoes} from '../services/index'
import { showNotification } from '../components/notification';

export default class ListaTimes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayTimes: []
        };
    }
    async componentDidMount() {
        let times = await getTimes()
        this.setState({ arrayTimes: times });
    }

    async handleDelete(time) {
        let result = await deleteTime(time.id)
        if(result) {
            let times = await getTimes()
            this.setState({ arrayTimes: times });
            showNotification("Time foi excluido com sucesso", "Time excluido", "success")
        }
    }

    async liberarAvaliacoes(){
        const result = await postAbrirAvaliacoes();
        if (result){
            return showNotification("Avaliações liberadas aos times validos!", "Sucesso!", "success")
        } else {
            return showNotification("Time foi excluido com sucesso", "Erro", "success")
        }
    }

    render() {
        return (
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{marginTop: '10px'}}>
                <Grid item xs={12} >
                    <Title text="Times"> </Title>
                </Grid>
                <Grid item xs={12} style={{width: '800px'}}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Nome do time</TableCell>
                                        <TableCell align="center">Membros</TableCell>
                                        <TableCell align="center">Gerenciar Integrantes</TableCell>
                                        <TableCell align="center">Excluir time</TableCell>
                                    </TableRow>
                                </TableHead>
                            <TableBody>
                            {this.state.arrayTimes?.map((time) => (
                                <TableRow key={time.id}>
                                    <TableCell align="center">{time.nome}</TableCell>
                                    <TableCell align="center">{time.alunos.length}</TableCell>
                                    <TableCell align="center">
                                        <Link 
                                            to={{
                                                pathname:'/integrantes', 
                                                dados: {id: time.id, nome: time.nome, integrantes: time.alunos}
                                            }}
                                        >
                                            <SettingsIcon color="primary" />
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <DeleteIcon color="primary" onClick={()=> this.handleDelete(time)}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{textTransform:"none"}}
                        component={Link} to={'/times/cadastro'}
                    >
                        Adicionar time
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{marginLeft: 20, textTransform:"none"}}
                        onClick={() => this.liberarAvaliacoes()}
                    >
                        Liberar Avaliações
                    </Button>
                </Grid>
            </Grid>
      );
    }


}







