import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {getAlunos} from '../services/index'

export default class ListaAlunos extends Component {
    constructor(props) {
        super(props);
        this.props.location.state = { atualiza: false}
        this.state = {
            alunos: [],
        };
    }
    async componentDidMount() {
        let arrayAlunos = await getAlunos()
        this.setState({ alunos: arrayAlunos });
    }

    async componentDidUpdate(nextProps) {    
        if (this.props.location.state.atualiza) {
            let arrayAlunos = await getAlunos()
            this.setState({ alunos: arrayAlunos });
        } else {
            this.props.location.state.atualiza = false;
        }
    }

    async handleClickInscrever(){ 
        this.props.history.push("/alunos/cadastro")
    }
    
    render() {
        return (
            <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{marginTop: '10px'}}>
                <Grid item xs={12} >
                    <Typography variant="h4" >
                        Alunos
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <List dense style={{width: '500px'}}>
                            {this.state.alunos?.map((value) => {
                                return (
                                    <ListItem key={value}>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt={'imagem'}
                                                src={'/static/images/avatar/'}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText primary={value.nome} />
                                        <ListItemText primary={value.curso} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" style={{textTransform:"none"}} onClick={() => this.handleClickInscrever()}>
                        Inscrever Aluno
                    </Button>
                </Grid>
            </Grid>
      );
    }


}







