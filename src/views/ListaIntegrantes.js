import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {getAlunosInscritos} from '../services/index'
import {patchIntegrantesDoTime} from '../services/index'

export default class ListaIntegrantes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alunosInscritos: [],
        };
    }

    async componentDidMount() {
        let alunosInscritos = await getAlunosInscritos()
        this.setState({ alunosInscritos: alunosInscritos });
    }

    async handleAdd(aluno) {
        await patchIntegrantesDoTime(aluno, this.location.props.data)
    }
    handleDelete() {
        
    }

    render() {    
        return (
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{marginTop: '10px'}}>
                <Grid item xs={12} >
                    <Typography variant="h4" >
                        Adicionar Integrantes
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{width: '900px'}}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Nome do aluno</TableCell>
                                        <TableCell align="center">Curso</TableCell>
                                        <TableCell align="center">Sugestão</TableCell>
                                        <TableCell align="center">Adicionar</TableCell>
                                        <TableCell align="center">Remover</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                            <TableBody>
                            {this.state.alunosInscritos.map((row) => (
                                <TableRow key={row.aluno}>
                                    <TableCell align="center">{row.nome}</TableCell>
                                    <TableCell align="center">{row.curso}</TableCell>
                                    <TableCell align="center">{row.sugestao}</TableCell>
                                    <TableCell align="center">
                                        <AddCircleIcon color="primary" onClick={() => this.handleAdd(row)}/>
                                    </TableCell>
                                    <TableCell align="center">
                                        <DeleteIcon color="primary" onClick={() => this.handleDelete}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} alignItems="center" justify="center">
                    <Button component={Link} to={'/times'} variant="contained" color="primary" style={{textTransform:"none"}}>
                        Salvar
                    </Button>
                </Grid>
            </Grid>
      );
    }


}







