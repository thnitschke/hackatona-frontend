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

export default class EditarTimes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {    
        const rows = [{aluno:'João',curso: 'Engenharia de Software',sugestao: 'Time A'}, {aluno:'Pedro',curso: 'Ciência da Computação',sugestao: 'Time B' }];
        return (
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{marginTop: '10px'}}>
                <Grid item xs={12} >
                    <Typography variant="h4" >
                        Editar time
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{width: '900px'}}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                    <TableRow>
                                        <TableCell>Nome do aluno</TableCell>
                                        <TableCell>Curso</TableCell>
                                        <TableCell>Sugestão de time</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.aluno}>
                                    <TableCell>{row.aluno}</TableCell>
                                    <TableCell>{row.curso}</TableCell>
                                    <TableCell>{row.sugestao}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" style={{textTransform:"none"}}>
                                            Adicionar ao Time
                                        </Button>
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







