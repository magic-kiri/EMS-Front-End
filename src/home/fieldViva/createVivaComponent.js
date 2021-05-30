
import React, { useState } from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NameTitle from './pairTextField'
import DatePicker from './datePicker';
import TextField from '@material-ui/core/TextField';

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
    courseTitle: null,
    startingRegNo: null,
    endingRegNo: null,
    date: null,
    startTime: null,
    duration: null,
}



function validateForm(vivaInfo, setVivaInfo) {
    let tempInfo = {...vivaInfo};
    let isOk = true;
    for (const item in vivaInfo) {
        if (tempInfo[item] === null || tempInfo === '') {
            tempInfo[item] = '';
            isOk = false;
        }
    }
    setVivaInfo(tempInfo)
    return isOk;
}


export default function CreateVivaComponent(props) {

    const classes = useStyles();
    const [vivaInfo, setVivaInfo] = useState(initialVivaInfo);
    const { setOpen } = props.state;

    function handleChange(event) {
        const { name, value } = event.currentTarget
        setVivaInfo({ ...vivaInfo, [name]: value })
    }


    const state = {
        vivaInfo: vivaInfo,
        setVivaInfo: setVivaInfo,
        handleChange: handleChange,
    };


    function submitAction() {
        if (validateForm(vivaInfo, setVivaInfo)) {
            
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography className={classes.title}>Create New Viva</Typography>
            </div>
            <div>
                <NameTitle state={{ ...state, name1: 'courseCode', name2: 'courseTitle' }} myLabel={{ label1: 'Course Code', label2: 'Title' }} />
                <br />
                <NameTitle state={{ ...state, name1: 'startingRegNo', name2: 'endingRegNo' }} myLabel={{ label1: 'Starting Registration No.', label2: 'Ending Registration No.' }} />
                <DatePicker state={{ ...state, name1: 'date', name2: 'startTime' }} />
                <br />
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField error={vivaInfo.duration === '' ? true : false}
                                variant="outlined" name='duration' onChange={handleChange} value={vivaInfo.duration}
                                required fullWidth label='Viva Duration' autoFocus 
                                value={vivaInfo.duration===null ? '' :vivaInfo.duration}
                                />
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <br />
            </div>
            <div className={classes.buttonDiv}>
                <Button color="primary" variant="contained" onClick={() => submitAction()} >Create Viva</Button>
                <Button color="secondary" onClick={() => setOpen(false)} className={classes.cancelButton} variant="contained" >Cancel</Button>
            </div>
        </div>

    )
}