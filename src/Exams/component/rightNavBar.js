

import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useParams } from 'react-router-dom';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import postData from '../../methods/postMethod';
import getData from '../../methods/getMethod';


const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        height: '100%',
        // display: 'flex',
        // justifyContent: 'center',
        // minWidth: 200,
    },
    title: {
        // backgroundColor: 'yellow',
        display: 'flex',
        justifyContent: 'center',
        // paddingTop: 15,
        // paddingBottom: 10,
        fontSize: 16,
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
        // backgroundColor: 'green',
        height: '71vh',
        boxShadow: theme.shadows[3],
    },
    current: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Times',
    }
}));


const drawerWidth = 310;
export default function RightNavBar(props) {
    const [waitingList, setWaitingList] = useState([]);
    const [currentReg, setCurrentReg] = useState('None');
    const classes = useStyles();
    let { id } = useParams();

    useEffect(async () => {
        const res = await getData(`/viva/waitingList/${id}`);
        if (res.status === 200)
            setWaitingList(res.body);
        const response = await postData('/exam/getCurrentReg',{id:id});
        if(response.status === 200)
            setCurrentReg(response.body.currentReg);
    }, []);

    async function handleClicked(roll) {
        const res = await postData(`/exam/approveStudent`, { id: id, registrationNo: roll })
    }

    async function removeStudent(){
        const res = await postData('/exam/removeStudent', {id:id});
    }

    return (
        <div className={classes.root} >
            <div className={classes.current}>
                <Typography className={classes.current}> Current Participant : {currentReg} </Typography>
                <IconButton >
                    <ExitToAppRoundedIcon color="primary" onClick={()=>removeStudent()} />
                </IconButton>
            </div>
            <div className={classes.title}>
                <Typography className={classes.title}> Waiting Room </Typography>
            </div>
            <Divider />
            <div className={classes.outline} >
                <div className={classes.title}>
                    <div className={classes.container}>
                        {waitingList.map((roll) =>
                        (<div className={classes.box}>
                            <Typography className={classes.roll}>{roll}</Typography>
                            <IconButton onClick={() => handleClicked(roll)}>
                                <AddCircleIcon color="primary" />
                            </IconButton>
                            <br />
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}
