



import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { IconButton, Typography, Button, Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import Stopwatch from '../../Stopwatch';
import { useParams } from 'react-router-dom';
import postData from '../../methods/postMethod';




const useStyles = makeStyles((theme) => ({
    top: {
        height: '30%',
        // backgroundColor: 'green',
    },
    root: {

        height: '100%',
        width: '100%'
    },
    stopwatch:{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Times',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 19,
        fontWeight: 'bold',
        fontFamily: 'Times',
    },
    container: {
        overflowY: 'scroll',
        height: '62vh',
    },
    box: {
        boxShadow: theme.shadows[2],
        justifyContent: 'space-around',
        display: 'flex',
        width: 200,
        paddingLeft: 15,
        paddingRight: 15,
    },
    roll: {
        paddingLeft: 13,
        paddingTop: 13,
        borderBottom: 2,
        borderTop: 2,
    },
    outline: {
        height: '70vh',
        boxShadow: theme.shadows[3],
    },
    divider: {
        
    },
    bank: {
        overflowY: 'scroll',
        // backgroundColor: 'red',
        height: '62%',
    },
    question:{
        fontFamily: 'Times',
        fontSize: 15,
        
    }
}));


const drawerWidth = 310;
export default function LeftNavBar(props) {
    const classes = useStyles();
    
    const bank = [
        "This is a question no 1. what you think?? true or false ",
        "This is a question no 1. what you think?? true or false ",
        "This is a question no 1. what you think?? true or falseThis is a question no 1. what you think?? true or false",
        "This is a question no 1. what you think?? true or false "]

        return (
            <div className={classes.root} >
            <div className={classes.top}>

                <div className={classes.stopwatch}>
                    <Typography className={classes.stopwatch}> Stop Watch </Typography>
                </div>
                <Divider /><Divider /><Divider />
                <div className={classes.title}>
                    <Typography className={classes.title}> Question Bank </Typography>
                </div>
            </div>
            {/* <Divider /><Divider /><Divider /> */}
            <List className={classes.bank}>
                {
                    bank.map(question => (

                        <div>
                            <Divider className={classes.divide} />
                            <ListItem >
                                <Typography className={classes.question}> {question} </Typography>
                                <IconButton aria-label="add" value={question} onClick={() => { }}>
                                    <ArrowForwardRoundedIcon color="primary" />
                                </IconButton>
                                <IconButton aria-label="delete" value={question} onClick={() => { }}>
                                    <DeleteIcon color="secondary" />
                                </IconButton>
                            </ListItem>


                        </div>
                    ))
                }
            </List>


        </div>)
}
