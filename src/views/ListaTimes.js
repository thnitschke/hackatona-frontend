import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {getTimes} from '../services/index'

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
    render() {
        return (
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{marginTop: '10px'}}>
                <Grid item xs={12} >
                    <Typography variant="h4" >
                        Times
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{width: '800px'}}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Nome do time</TableCell>
                                        <TableCell align="center">Membros</TableCell>
                                        <TableCell align="center">Adicionar Integrantes</TableCell>
                                        <TableCell align="center">Excluir time</TableCell>
                                    </TableRow>
                                </TableHead>
                            <TableBody>
                            {this.state.arrayTimes.map((row) => (
                                <TableRow key={row.time}>
                                    <TableCell align="center">{row.nome}</TableCell>
                                    <TableCell align="center">{row.integrantes.length}</TableCell>
                                    <TableCell align="center">
                                        <Link 
                                            to={{
                                                pathname:'/integrantes', 
                                                dados: {id: row.id, nome: row.nome, integrantes: row.integrantes}
                                            }}
                                        >
                                            <AddCircleIcon color="primary" />
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <DeleteIcon color="primary"/>
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
                        onClick={() => {this.handleClick()}} 
                        style={{textTransform:"none"}}
                        component={Link} to={'/integrantes'}
                    >
                        Adicionar time
                    </Button>
                </Grid>
            </Grid>
      );
    }


}







