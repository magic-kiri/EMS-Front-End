

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, Box } from '@material-ui/core';
import { Title } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    title: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        borderColor: 'blue',
        borderWidth: 10,
        width: 130,
        hieght: 60,
        textAlign: 'center',
    },

}));


export default function SectionTop(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Grid
                className={classes.container}
                spacing={3} container
                justify="space-evenly"
                alignItems="flex-start"
            >
                
                <Paper className={classes.title}> Upcoming </Paper>
                <Paper className={classes.title}> Running </Paper>
                <Paper className={classes.title}> Finished </Paper>
            </Grid>
        </div>
    )
}