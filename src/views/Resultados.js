import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../components/Title';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { getResultados } from '../services/index'


export default class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayAvaliacoes: []
        };
    }
    async componentDidMount() {
        let resultados = await getResultados()
        this.setState({ arrayAvaliacoes: !!resultados ? resultados.filter(resultado => resultado.total > 0) : []});
    }

    render() {
        const { arrayAvaliacoes } = this.state
        return !!arrayAvaliacoes && arrayAvaliacoes.length > 0 ?
            (
                <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{ marginTop: '10px' }}>
                    <Grid item xs={12} >
                        <Title text="Resultados"> </Title>
                    </Grid>
                    <Grid item xs={12} style={{ width: '800px' }}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Posição</TableCell>
                                        <TableCell align="center">Time</TableCell>
                                        <TableCell align="center">Software</TableCell>
                                        <TableCell align="center">Processo</TableCell>
                                        <TableCell align="center">Pitch</TableCell>
                                        <TableCell align="center">Inovação</TableCell>
                                        <TableCell align="center">Total de Avaliações</TableCell>
                                        <TableCell align="center">Total de Pontos</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.arrayAvaliacoes?.map((avaliacao, index) => (
                                        <TableRow key={avaliacao.timeDTO.id}>
                                            <TableCell align="center"><b>{index + 1 + "º"}</b></TableCell>
                                            <TableCell align="center">{avaliacao.timeDTO.nome}</TableCell>
                                            <TableCell align="center">{avaliacao.software}</TableCell>
                                            <TableCell align="center">{avaliacao.processo}</TableCell>
                                            <TableCell align="center">{avaliacao.pitch}</TableCell>
                                            <TableCell align="center">{avaliacao.inovacao}</TableCell>
                                            <TableCell align="center">{avaliacao.avaliacoes}</TableCell>
                                            <TableCell align="center">{avaliacao.total}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            ) :
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{ marginTop: '10px' }}>
                <Grid item xs={12} >
                    <Title text="Resultados"> </Title>
                </Grid>
                <Typography variant="h6" >
                    Nenhum resultado de time encontrado, solicite as avaliações.
                </Typography>
            </Grid>;
    }


}







