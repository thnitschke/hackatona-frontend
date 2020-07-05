import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { postAluno } from '../services/index'

export default class CadastroAlunos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aluno: {
                matricula:'', 
                sugestao:'', 
                curso:'', 
                id_curso:'', 
                nome:''
            }
        };
    }

    handleChangeNome(event) {
        this.setState({aluno: {...this.state.aluno, nome: event.target.value}});
    }
    handleChangeMatricula(event) {
        this.setState({aluno: {...this.state.aluno, matricula: event.target.value}});
    }
    handleChangeSugestao(event) {
        this.setState({aluno: {...this.state.aluno, sugestao: event.target.value}});
    }
    handleChangeCurso(event) {
        this.setState({aluno: {...this.state.aluno, curso: event.target.value}});
    }
    handleChangeCodCurso(event) {
        this.setState({aluno: {...this.state.aluno, id_curso: event.target.value}});
    }

    async handleClickInscrever() {
        await postAluno(this.state.aluno)
        this.props.history.push("/alunos", {atualiza: true})
    }
    render() {
        return (
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{ marginTop: '10px' }}>
                <Grid item xs={12} >
                    <Typography variant="h4" >
                        Inscrever Alunos
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <form noValidate autoComplete="off"  style={{ display: 'flex', flexDirection:"column" }}>
                        <TextField 
                            style={{ marginBottom: '15px'}} 
                            label="Nome" 
                            variant="outlined" 
                            size="small" 
                            onChange={(event) => this.handleChangeNome(event)} 
                        />
                        <TextField 
                            style={{ marginBottom: '15px'}} 
                            label="Matrícula" 
                            variant="outlined" 
                            size="small" 
                            onChange={(event) => this.handleChangeMatricula(event)} 
                        />
                        <TextField 
                            style={{ marginBottom: '15px'}} 
                            label="Sugestão" 
                            variant="outlined" 
                            size="small" 
                            onChange={(event) => this.handleChangeSugestao(event)} 
                        />
                        <TextField 
                            style={{ marginBottom: '15px'}} 
                            label="Curso" 
                            variant="outlined" 
                            size="small" 
                            onChange={(event) => this.handleChangeCurso(event)} 
                        />
                        <TextField 
                            style={{ marginBottom: '15px'}} 
                            label="Cod Curso" 
                            variant="outlined" 
                            size="small" onChange={(event) => this.handleChangeCodCurso(event)} 
                        />
                    </form>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" style={{ textTransform: "none" }} onClick={() => this.handleClickInscrever()}>
                        Salvar
                    </Button>
                </Grid>
            </Grid>
        );
    }


}







