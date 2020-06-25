import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [],
    };
  }

  componentWillMount(){
    sessionStorage.setItem("tipoUsuario", -1)
  }

  buscarUsuario(codigo){
    sessionStorage.setItem("tipoUsuario", codigo)
    this.props.history.replace("/alunos")
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center" spacing={6} style={{ marginTop: '10px' }}>
        <Grid>
        <Grid container justify="center" alignItems="center">
          <Typography variant="h4" >
            Bem vindo
           </Typography>
           </Grid>
          <Grid container direction='row'>
            <Grid item direction='column' style={{cursor: 'pointer', marginRight: 60}} onClick={() => this.buscarUsuario(1)}>
              <SupervisorAccountIcon style={{ fontSize: 100 }} color="primary" />
              <Typography variant="h4" > Admin </Typography>
            </Grid>
            <Grid item direction='column' style={{cursor: 'pointer'}} onClick={() => this.buscarUsuario(2)}>
              <ListAltIcon style={{ fontSize: 100 }} color="primary" />
              <Typography variant="h4" >Avaliador </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }


}







