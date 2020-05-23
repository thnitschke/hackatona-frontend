import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CheckboxListSecondary() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Grid container justify="center" alignItems="center" spacing={6}>
            <Grid item xs={12} >
                <Typography variant="h4" >
                    Participantes
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <List dense className={classes.root}> 
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-secondary-label-${value}`;
                            return (
                                <ListItem key={value} button>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`Avatar n°${value + 1}`}
                                            src={`/static/images/avatar/${value + 1}.jpg`}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText id={labelId} primary={'Paulo'} />
                                    <ListItemText id={labelId} primary={'Ciência da Computação'} />
                                    <ListItemSecondaryAction>
                                        <Checkbox
                                            label='My checkbox'
                                            edge="end"
                                            onChange={handleToggle(value)}
                                            checked={checked.indexOf(value) !== -1}
                                            inputProps={{ 'aria-labelledby': labelId }}
                                            style={{
                                                color: "#3f51b5",
                                            }}
                                        />
                                    </ListItemSecondaryAction>
                                </ListItem>
                            );
                        })}
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12} alignItems="center" justify="center">
                <Button variant="contained" color="primary">
                    Cadastrar
                </Button>
            </Grid>
        </Grid>
    );
}