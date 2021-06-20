


import '../style.css'
import {Grid } from '@material-ui/core';
import Exam from './exam';

export default function GridColumn(props) {
    console.log(props.data);
    const { exams,state } = props.data;
    const component = exams.map((exam) => <Exam key={exam._id} data={{exam: exam,state:state}}/>)
    
    return (
        <Grid item>
            {component}
        </Grid>
    )
}