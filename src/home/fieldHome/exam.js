import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 300,
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        display: 'flex',
    },
    title: {
        // flex:'center',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Times'
    },
    text: {
        fontSize: 14,
        fontFamily: 'Times'
    },
    date: {
        fontSize: 14,
        fontFamily: 'Times',
        color: '#1780ad',
    }
}));

export default function Exam(props) {
    const classes = useStyles();
    const {_id, courseCode, courseTeacher, courseTitle, date, startTime, endTime } = props.data.exam;
    const { state } = props.data;
    let textDate, btnText;
    
    if (state === 'running') { 
        btnText = 'Enter'; 
        textDate = (<Typography className={classes.date} >RUNNING</Typography>); 
    }
    else { 
        btnText = 'Details';
        textDate = (<div>{`Date: ${date}`} </div>); 
    }

    const link = "/"+btnText+"/"+_id;
      
    
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>{courseCode + ': ' + courseTitle}</Typography>
                <Typography className={classes.text}>
                    {'by ' + courseTeacher}
                    <br />
                    {textDate}
                </Typography>
                <Typography className={classes.text}>
                    {`From ${startTime} to ${endTime}`}
                </Typography>

            </CardContent>
            <CardActions>
              <Link to ={link}>  <Button  color="primary" variant="contained" size="small">{btnText}</Button></Link>
            </CardActions>
        </Card>
    );
}