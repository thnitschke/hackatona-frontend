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
import {deleteIntegranteDoTime} from '../services/index'

export default class ListaIntegrantes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alunosInscritos: [],
            time: this.props.location.dados || {}
        };
    }

    async componentDidMount() {
        let alunosInscritos = await getAlunosInscritos()
        this.setState({ alunosInscritos: alunosInscritos });
    }

    async handleAdd(aluno) {
        if(this.pertenceAoTime(aluno, this.state.time)) return
        await patchIntegrantesDoTime(aluno, this.state.time)
        this.setState({})
    }
    
    async handleDelete(aluno) {
        if(!this.pertenceAoTime(aluno, this.state.time)) return
        await deleteIntegranteDoTime(aluno, this.state.time)
        this.setState({})
    }

    pertenceAoTime(aluno, time){
        const ehDoTime = time.integrantes.filter(element => aluno.id === element.id)
        return !!ehDoTime && ehDoTime.length > 0
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
                            {this.state.alunosInscritos?.map((aluno) => (
                                <TableRow key={aluno.id}>
                                    <TableCell align="center">{aluno.nome}</TableCell>
                                    <TableCell align="center">{aluno.curso}</TableCell>
                                    <TableCell align="center">{aluno.sugestao}</TableCell>
                                    <TableCell align="center">
                                        <AddCircleIcon 
                                            color={this.pertenceAoTime(aluno,this.state.time) ? 'disabled' : 'primary'} 
                                            onClick={() => this.handleAdd(aluno)}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <DeleteIcon 
                                            color={this.pertenceAoTime(aluno,this.state.time) ? 'primary' : 'disabled'} 
                                            onClick={() => this.handleDelete(aluno)}/>
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







