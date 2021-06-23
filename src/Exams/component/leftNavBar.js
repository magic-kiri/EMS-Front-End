



import React, { useState, useEffect } from 'react';
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
    stopwatch: {
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
        // justifyContent: 'flex-start',
        display: "flex"
    },
    outline: {
        height: '70vh',
        boxShadow: theme.shadows[3],
    },

    bank: {
        overflowY: 'scroll',
        height: '62%',
    },
    question: {
        fontFamily: 'Times',
        fontSize: 15,
        justifyContent: 'flex-start',
        display: "flex"
    },
    icon: {
        flexGrow:1 ,
        justifyContent: 'flex-end',
        display: "flex",
    }


}));


const drawerWidth = 310;
export default function LeftNavBar(props) {
    const classes = useStyles();
    const [bank, setBank] = useState([]);

    useEffect(async () => {
        const res = await postData(`/question/getBank`, { email: localStorage.getItem('email') });
        console.log(res);
        if (res.status === 200) {
            console.log(res.body);
            setBank(res.body);
        }
    }, []);


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
                        // <div >
                        <ListItem className={classes.container}>
                            <Divider className={classes.divide} />
                            <div className = {classes.question}>
                                <Typography className={classes.question}> {question} </Typography>

                            </div>
                            <div className={classes.icon}>
                                <IconButton  onClick={() => { }}>
                                    <ArrowForwardRoundedIcon color="primary" />
                                </IconButton>
                                <IconButton  onClick={() => { }}>
                                    <DeleteIcon color="secondary" />
                                </IconButton>
                            </div>
                        </ListItem>
                    ))
                }
            </List>


        </div>)
}
