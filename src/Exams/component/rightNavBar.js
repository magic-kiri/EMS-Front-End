

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useParams } from 'react-router-dom';
import postData from '../../methods/postMethod';



const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: 'yellow',
        // flexGrow: 1,
        height: '100%',
        // display: 'flex',
        // justifyContent: 'center',
        // minWidth: 200,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 25,
        paddingBottom: 15,
        fontSize: 24,
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
    outline:{
        // backgroundColor: 'white',
        height:'71vh',
        boxShadow: theme.shadows[3],
    }
}));


const drawerWidth = 310;
export default function RightNavBar(props) {

    const classes = useStyles();
    const { waitingList} = props.state;
    let { id } = useParams();
    
    async function handleClicked(roll){
        const res = await postData(`/exam/approveStudent`, { id:id, registrationNo: roll})
    }

    return (
        <div className={classes.root} >

            <div className={classes.title}>
                <Typography className={classes.title}> Waiting Room </Typography>
            </div>
            <Divider/>
            <div className={classes.outline} >
                <div className={classes.title}>
                    <div className={classes.container}>
                        {waitingList.map((roll) =>
                        (<div className={classes.box}>
                            <Typography className={classes.roll}>{roll}</Typography>
                            <IconButton onClick={()=>handleClicked(roll)}>
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
