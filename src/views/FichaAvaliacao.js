import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { getAvaliacoesPorAvaliador, postAvaliacaoDoAvaliador } from '../services/index'
import { showNotification } from '../components/notification';

export default class FichaAvaliacao extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avaliacoes: [],
      selectedTeamIndex: -1,
      software: "0",
      process: "0",
      pitch: "0",
      innovation: "0",
    };
  }

  componentDidMount = async () => {
    let avaliacoesTimes = await getAvaliacoesPorAvaliador()
    this.setState({ avaliacoes: avaliacoesTimes || [] });
  };

  handleWorkingSoftwareChange = (event) => {
    this.setState({ software: event.target.value });
  }

  handleProcessChange = (event) => {
    this.setState({ process: event.target.value });
  }

  handlePitchChange = (event) => {
    this.setState({ pitch: event.target.value });
  }

  handleInnovationChange = (event) => {
    this.setState({ innovation: event.target.value });
  }

  openAvaliacao = (avaliacao, index) => {
    this.setState({
      selectedTeamIndex: index,
      innovation: avaliacao.inovacao + '',
      software: avaliacao.software + '',
      process: avaliacao.processo + '',
      pitch: avaliacao.pitch + '',
    });
  }

  saveRatings = async (idAvaliador) => {
    if (!this.state.innovation || !this.state.software || !this.state.process || !this.state.pitch) {
      showNotification("É necessário selecionar todos os campos", "Erro", "danger")
      return
    }
    const avaliacao = {
      id: idAvaliador,
      inovacao: parseInt(this.state.innovation),
      software: parseInt(this.state.software),
      processo: parseInt(this.state.process),
      pitch: parseInt(this.state.pitch)
    }
    let result = await postAvaliacaoDoAvaliador(avaliacao)
    if (result) {
      let avaliacoesTimes = await getAvaliacoesPorAvaliador(idAvaliador)
      this.setState({ avaliacoes: avaliacoesTimes, selectedTeamIndex: -1 });
      showNotification("Avaliação enviada com sucesso", "Enviado", "success")
    }
  }

  render() {
    const { avaliacoes } = this.state
    return !!avaliacoes && avaliacoes.length > 0 ?
      (
        <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{ marginTop: '10px' }}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Avaliar times
          </Typography>
          </Grid>
          <Grid item style={{ width: "50%" }}>
            {this.state.avaliacoes.map((avaliacao, index) => (
              <ExpansionPanel expanded={this.state.selectedTeamIndex === index} TransitionProps={{ unmountOnExit: true }} onChange={() => this.openAvaliacao(avaliacao, index)}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={"panel" + index + "c-content"}
                  id={"panel" + index + "c-header"}
                >
                  <Typography variant="h6">{"Time: " + avaliacao.time.nome}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container justify="center" alignItems="center" spacing={12} direction="column">
                    <FormControl>
                      <FormLabel component="legend">Software funcionando:</FormLabel>
                      <RadioGroup value={this.state.software} onChange={this.handleWorkingSoftwareChange}>
                        <Grid item xs={12}>
                          <FormControlLabel value={"0"} control={<Radio />} label="Ruim" labelPlacement="start" />
                          <Radio value="1" />
                          <Radio value="2" />
                          <Radio value="3" />
                          <Radio value="4" />
                          <FormControlLabel value={"5"} control={<Radio />} label="Excelente" labelPlacement="end" />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Processo:</FormLabel>
                      <RadioGroup value={this.state.process} onChange={this.handleProcessChange}>
                        <Grid item xs={12}>
                          <FormControlLabel value={"0"} control={<Radio />} label="Ruim" labelPlacement="start" />
                          <Radio value="1" />
                          <Radio value="2" />
                          <Radio value="3" />
                          <Radio value="4" />
                          <FormControlLabel value={"5"} control={<Radio />} label="Excelente" labelPlacement="end" />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Pitch</FormLabel>
                      <RadioGroup value={this.state.pitch} onChange={this.handlePitchChange}>
                        <Grid item xs={12}>
                          <FormControlLabel value={"0"} control={<Radio />} label="Ruim" labelPlacement="start" />
                          <Radio value="1" />
                          <Radio value="2" />
                          <Radio value="3" />
                          <Radio value="4" />
                          <FormControlLabel value={"5"} control={<Radio />} label="Excelente" labelPlacement="end" />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Inovação</FormLabel>
                      <RadioGroup value={this.state.innovation} onChange={this.handleInnovationChange}>
                        <Grid item xs={12}>
                          <FormControlLabel value={"0"} control={<Radio />} label="Ruim" labelPlacement="start" />
                          <Radio value="1" />
                          <Radio value="2" />
                          <Radio value="3" />
                          <Radio value="4" />
                          <FormControlLabel value={"5"} control={<Radio />} label="Excelente" labelPlacement="end" />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                  <Button size="small" color="primary" onClick={() => this.saveRatings(avaliacao.id)}>
                    Salvar
                </Button>
                </ExpansionPanelActions>
              </ExpansionPanel>
            )
            )
            }
          </Grid>
        </Grid>
      )
      :
      <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{ marginTop: '10px' }}>
        <Grid item xs={12}>
          <Typography variant="h4">
            Avaliar times
          </Typography>
        </Grid>
        <Typography variant="h6" >
          Nenhuma avaliação disponivel, solicite a liberação delas a um administrador.
        </Typography>
      </Grid>;
  }


}







