
import React, { useState} from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NameTitle from './pairTextField'
import DatePicker from './datePicker';

const useStyles = makeStyles((theme) => ({

    root: {

        backgroundColor: '#edfff8',
        border: '0.5px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        // minWidth: 600,
        // minHeight: 500,
    },
    title: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        // flex:'center',
        padding: theme.spacing(2),
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Times'
    },
    buttonDiv: {
        display: 'flex',
        // background:'red',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

}));

const initialVivaInfo = {
    courseCode: null,
    courseTeacher: null,
    courseTitle: null,
    date: null,
    startTime: null,
    endTime: null
}

export default function CreateVivaComponent(props) {

    const classes = useStyles();
    const [vivaInfo, setVivaInfo] = useState(initialVivaInfo) ;
    const {open,setOpen} = props.state;
    const state = {
        vivaInfo: vivaInfo,
        setVivaInfo:setVivaInfo,
    };
    
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography className={classes.title}>Create New Viva</Typography>
            </div>
            <div>
                <br />
                <NameTitle state={state} myLabel={{label1: 'Course Code', label2: 'Title'}}/>
                <br />
                <NameTitle state={state} myLabel={{label1: 'Starting Registration No.', label2: 'Ending Registration No.'}}/>
                <br />
                <DatePicker state={state}/>
                <br />
                <br />
                <br />
            </div>
            <div className={classes.buttonDiv}>
                <Button color="primary" variant="contained" >Create Viva</Button>
                <Button color="secondary" className={classes.cancelButton} variant="contained" >Cancel</Button>
            </div>
        </div>

    )
}