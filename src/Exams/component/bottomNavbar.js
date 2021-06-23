import { useParams } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState,useEffect } from 'react';
import postData from '../../methods/postMethod';




const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor: '#edfff8',
        // border: '0.1px solid #000',
        boxShadow: theme.shadows[2],
        // flexGrow: 1,
        height: '15vh',
        // backgroundColor: 'red',
        // backgroundColor: 'green',
        // flexDirection: 'column-reverse',
    },
    packet: {
        
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    button: {
        // height: '100%',
        padding: theme.spacing(2, 4, 3),
        display: 'flex',
        justifyContent: 'center'
    }


}));



export default function BottomNavbar(props) {
    let { id } = useParams();
    const classes = useStyles();
    const [question,setQuestion] =  useState('');
    const {render,setRender} = props.state;
    async function askQuestion()
    {
        console.log("pressed ask")
        const res = await postData(`/viva/postQuestion`,{question: question,id: id});
        console.log(res);
        if(res.status===200)
            setQuestion('');
        const response = await postData('/question/addQuestion',{question: question, email: localStorage.getItem('email') });
        setRender((render+1)%100000); 
    }
    return (
        <div className={classes.root}>
            <div className={classes.packet}>

                <div className={classes.button}>
                    <TextField
                        required fullWidth label='Question' autoFocus value={question}
                        onChange = {(event)=>{setQuestion(event.currentTarget.value)}}
                    />
                    <Button variant="contained" color="primary"  onClick = {askQuestion} >Ask</Button>
                </div>
            </div>


        </div>
    )
}
