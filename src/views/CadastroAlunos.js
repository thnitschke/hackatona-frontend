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
import {getAlunos} from '../services/index'
import {postAlunosInscritos} from '../services/index'

export default class CadastroAlunos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alunos: [],
            alunosInscritos: []
        };
    }
    async componentDidMount() {
        let arrayAlunos = await getAlunos()
        this.setState({ alunos: arrayAlunos });
    }

    handleChangeCheckbox(checked, value) { //Armazena no state aluno inscrito
        if(checked) {
            this.state.alunosInscritos.push(value)
        }
        else  {
            let index = this.state.alunosInscritos.indexOf(value) 
            this.state.alunosInscritos.splice(index, 1);
        }
    }
    async handleClickInscrever(){ 
        await postAlunosInscritos(this.state.alunosInscritos)
        this.props.history.push("/times")
    }
    render() {
        return (
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{marginTop: '10px'}}>
                <Grid item xs={12} >
                    <Typography variant="h4" >
                        Inscrever Alunos
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <List dense style={{width: '500px'}}>
                            {this.state.alunos.map((value) => {
                                return (
                                    <ListItem key={value} button>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt={'imagem'}
                                                src={'/static/images/avatar/'}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText primary={value.nome} />
                                        <ListItemText primary={value.curso} />
                                        <ListItemSecondaryAction>
                                            <Checkbox
                                                label='My checkbox'
                                                edge="end"
                                                style={{ color: "#3f51b5" }}
                                                onChange={(event) => this.handleChangeCheckbox(event.target.checked,value)}
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" style={{textTransform:"none"}} onClick={() => this.handleClickInscrever()}>
                        Inscrever
                    </Button>
                </Grid>
            </Grid>
      );
    }


}







