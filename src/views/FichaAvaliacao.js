import React, {Component} from 'react';
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

export default class FichaAvaliacao extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {name: "Os melhores do mundo", id: 1},
        {name: "Os Nerds", id: 2},
        {name: "Mean girls", id: 3},
        ],
      selectedTeamIndex: 0,
      workingSoftware: "0",
      process: "0",
      pitch: "0",
      innovation: "0",
      teamFormation: "0",
    };
  }

  componentDidMount = async () => {

  };

  handleWorkingSoftwareChange = (event) => {
    this.setState({workingSoftware: event.target.value});
  }
  handleProcessChange = (event) => {
    this.setState({process: event.target.value});
  }
  handlePitchChange = (event) => {
    this.setState({pitch: event.target.value});
  }
  handleInnovationChange = (event) => {
    this.setState({innovation: event.target.value});
  }
  handleTeamFormationChange = (event) => {
    this.setState({teamFormation: event.target.value});
  }

  resetValues = () => {
      this.setState({
          workingSoftware: "0",
          process: "0",
          pitch: "0",
          innovation: "0",
          teamFormation: "0",
      });
  }

  saveRatings = () => {
      let changedTeam = {
          ...this.state.teams[this.state.selectedTeamIndex],
          workingSoftware: this.state.workingSoftware,
          process: this.state.process,
          pitch: this.state.pitch,
          innovation: this.state.innovation,
          teamFormation: this.state.teamFormation
      }
      this.state.teams[this.state.selectedTeamIndex] = changedTeam
      this.setState({
        workingSoftware: "0",
        process: "0",
        pitch: "0",
        innovation: "0",
        teamFormation: "0",
      })
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center" spacing={6} direction="column" style={{marginTop: '10px'}}>
        <Grid item xs={12}>
          <Typography variant="h4">
            Avaliar times
          </Typography>
        </Grid>
        <Grid item style={{width: "50%"}}>
          {this.state.teams.map((team, index) => (
          <ExpansionPanel TransitionProps={{unmountOnExit: true}} onChange={() => this.setState({selectedTeamIndex: index})}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls={"panel" + index + "c-content"}
              id={"panel" + index + "c-header"}
            >
              <Typography variant="h6">{"Time: " + team.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container justify="center" alignItems="center" spacing={12} direction="column">
                <FormControl>
                  <FormLabel component="legend">Software funcionando:</FormLabel>
                  <RadioGroup aria-label="rating1" name="rating1" value={this.state.workingSoftware} onChange={this.handleWorkingSoftwareChange}>
                    <Grid item xs={12}>
                      <FormControlLabel value={"0"} control={<Radio/>} label="Ruim" labelPlacement="start"
                                        style={{paddingRight: "2vw"}}/>
                      <FormControlLabel value={"1"} control={<Radio/>}/>
                      <FormControlLabel value={"2"} control={<Radio/>}/>
                      <FormControlLabel value={"3"} control={<Radio/>}/>
                      <FormControlLabel value={"4"} control={<Radio/>}/>
                      <FormControlLabel value={"5"} control={<Radio/>} label="Excelente" labelPlacement="end"/>
                    </Grid>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel component="legend">Processo:</FormLabel>
                  <RadioGroup aria-label="rating2" name="rating2" value={this.state.process} onChange={this.handleProcessChange}>
                    <Grid item xs={12}>
                      <FormControlLabel value={"0"} control={<Radio/>} label="Ruim" labelPlacement="start"
                                        style={{paddingRight: "2vw"}}/>
                      <FormControlLabel value={"1"} control={<Radio/>}/>
                      <FormControlLabel value={"2"} control={<Radio/>}/>
                      <FormControlLabel value={"3"} control={<Radio/>}/>
                      <FormControlLabel value={"4"} control={<Radio/>}/>
                      <FormControlLabel value={"5"} control={<Radio/>} label="Excelente" labelPlacement="end"/>
                    </Grid>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel component="legend">Pitch</FormLabel>
                  <RadioGroup aria-label="rating3" name="rating3" value={this.state.pitch} onChange={this.handlePitchChange}>
                    <Grid item xs={12}>
                      <FormControlLabel value={"0"} control={<Radio/>} label="Ruim" labelPlacement="start"
                                        style={{paddingRight: "2vw"}}/>
                      <FormControlLabel value={"1"} control={<Radio/>}/>
                      <FormControlLabel value={"2"} control={<Radio/>}/>
                      <FormControlLabel value={"3"} control={<Radio/>}/>
                      <FormControlLabel value={"4"} control={<Radio/>}/>
                      <FormControlLabel value={"5"} control={<Radio/>} label="Excelente" labelPlacement="end"/>
                    </Grid>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel component="legend">Inovação</FormLabel>
                  <RadioGroup aria-label="rating4" name="rating4" value={this.state.innovation} onChange={this.handleInnovationChange}>
                    <Grid item xs={12}>
                      <FormControlLabel value={"0"} control={<Radio/>} label="Ruim" labelPlacement="start"
                                        style={{paddingRight: "2vw"}}/>
                      <FormControlLabel value={"1"} control={<Radio/>}/>
                      <FormControlLabel value={"2"} control={<Radio/>}/>
                      <FormControlLabel value={"3"} control={<Radio/>}/>
                      <FormControlLabel value={"4"} control={<Radio/>}/>
                      <FormControlLabel value={"5"} control={<Radio/>} label="Excelente" labelPlacement="end"/>
                    </Grid>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel component="legend">Formação do time</FormLabel>
                  <RadioGroup aria-label="rating5" name="rating5" value={this.state.teamFormation} onChange={this.handleTeamFormationChange}>
                    <Grid item xs={12}>
                      <FormControlLabel value={"0"} control={<Radio/>} label="Ruim" labelPlacement="start"
                                        style={{paddingRight: "2vw"}}/>
                      <FormControlLabel value={"1"} control={<Radio/>}/>
                      <FormControlLabel value={"2"} control={<Radio/>}/>
                      <FormControlLabel value={"3"} control={<Radio/>}/>
                      <FormControlLabel value={"4"} control={<Radio/>}/>
                      <FormControlLabel value={"5"} control={<Radio/>} label="Excelente" labelPlacement="end"/>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>
            </ExpansionPanelDetails>
            <Divider/>
            <ExpansionPanelActions>
              <Button size="small" onClick={this.resetValues}>Limpar</Button>
              <Button size="small" color="primary" onClick={this.saveRatings}>
                Salvar
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
          )
          )
          }
        </Grid>
      </Grid>
    );
  }


}







