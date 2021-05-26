


import '../style.css'
import { Card, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Exam from './exam';


const useStyles = makeStyles((theme) => ({
    block: {
        margin: theme.spacing(1),
        padding: theme.spacing(3),
    }
}));

export default function GridColumn(props) {
    const classes = useStyles();
    const { exams,state } = props.data;
    const component = exams.map((exam) => <Exam data={{exam: exam,state:state}}/>)
    
    return (
        <Grid item>
            {component}
        </Grid>
    )
}