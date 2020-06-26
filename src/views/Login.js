import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { showNotification } from '../components/notification';
import {getUsuario} from '../services/index'

export default class Login extends Component {
  constructor(props) {
    super(props);
    sessionStorage.clear()
    this.state = {
      login: '',
      password: ''
    };
  }

  persisteUsuarioLogado(usuario) {
    sessionStorage.setItem("id", usuario.id)
    sessionStorage.setItem("nome", usuario.nome)
    sessionStorage.setItem("tipoUsuario", usuario.perfil)
    sessionStorage.setItem("usuario", usuario.usuario)
    this.props.history.replace(usuario.perfil == 1 ? "/alunos" : '/avaliacao')
  }

  async handleLogin() {
    const { login, password } = this.state
    if (!login || !password){
      return showNotification("Informe seus dados corretamente.", "Erro!", "danger")
    } else {
      const data = await getUsuario(login, password);
      if (!!data && data.success) {
        showNotification("Login efetuado com sucesso!", "Sucesso!", "success")
        this.persisteUsuarioLogado(data.content.user)
      } else {
        return showNotification("Usuário ou senha incorretos!.", "Erro!", "danger")
      }
    }
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center" spacing={6} style={{ marginTop: '170px', textAlign: 'center' }}>
        <Grid>
          <Grid item justify="center" alignItems="center">
            <Typography variant="h4" >
              AGES - Hackatona
           </Typography>
            <Typography variant="h5" >
              Informe suas credenciais:
           </Typography>
          </Grid>
          <Grid container justify="center" alignItems="center" spacing={4} style={{ marginTop: '10px' }}>
            <Grid item xs={12} >
              <TextField label="Usuario" variant="outlined" size="small" onChange={(event) => this.setState({ login: event.target.value })} />
            </Grid>
            <Grid item xs={12} >
              <TextField label="Senha" type="password" variant="outlined" size="small" onChange={(event) => this.setState({ password: event.target.value })} />
            </Grid>
            <Grid item xs={12}  justify="center" alignItems="center">
              <Button
                variant="contained"
                color="primary"
                style={{ textTransform: "none" }}
                onClick={() => this.handleLogin()}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }


}







