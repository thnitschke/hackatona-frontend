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
import {getAlunos, postIntegrante, deleteIntegrante} from '../services/index'

export default class ListaIntegrantes extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            alunos: [],
            time: this.props.location.dados || this.props.location.state.dados
        };
    }

    componentDidMount() {
        this.atualizaIntegrantes()
    }
    
    async atualizaIntegrantes() {
        let alunosInscritos = await getAlunos()
        alunosInscritos = alunosInscritos.filter(aluno => aluno.time === null || aluno.time.id === this.state.time.id)
        this.setState({ alunos: alunosInscritos});
    }

    async handleAdd(aluno) {
        if(this.pertenceAoTime(aluno, this.state.time)) return
        
        let response = await postIntegrante(aluno.id, this.state.time.id)
        if(response){
            await this.atualizaIntegrantes()
        }
    }
    
    async handleDelete(aluno) {
        if(!this.pertenceAoTime(aluno, this.state.time)) return
        
        let response = await deleteIntegrante(aluno.id)
        if(response) {
            await this.atualizaIntegrantes()
        }
    }

    pertenceAoTime(aluno, time){
        return !!aluno.time
    }

    render() {  
        return (
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{marginTop: '10px'}}>
                {!this.props.hideTitle &&
                    <Grid item xs={12} >
                        <Typography variant="h4" >
                            Integrantes Time {this.state.time?.nome}
                        </Typography>
                    </Grid>
                }
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
                            {this.state.alunos?.map((aluno) => (
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
                        Voltar
                    </Button>
                </Grid>
            </Grid>
      );
    }


}







