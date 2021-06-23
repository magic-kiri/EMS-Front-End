
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import postData from '../../methods/postMethod';

import { Typography, Button, Divider } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: 'green',
        height: '75vh',
        overflowY: 'scroll',
    },
    parent: {
        minWidth: 200,
        margin: "2%",
        boxShadow: theme.shadows[5],
    },
    // bullet: {
    //     display: 'inline-block',
    //     margin: '0 2px',
    //     transform: 'scale(0.8)',
    // },
    question: {
        fontSize: 17,
    },
    comment: {
        // paddingLeft: 20,
        // backgroundColor: 'red',
        // margin: "2%",
        fontSize: 12,
    },
    inp: {
        // backgroundColor: 'green',
        minWidth: '85%'
    }

}));


export default function Questions(props) {
    const classes = useStyles();

    const [questions, setQuestions] = useState([]);
    const { id, teacherMode } = props.state
    
    async function loadQuestion(){
        console.log("LOADING!!")
        const res = await postData(`/viva/getVivaHistory`, { id: id })
            if (res.status === 200){
                const {questions} = res.body;
                const newState = questions.map(element => {
                    element.inputComment = "";
                    return element;
                })
                setQuestions(newState);
            }
    }
    
    useEffect( () => {
        // const id = setInterval(loadQuestion,5000);
        loadQuestion();
        return () => {
            clearInterval(id);
        }
    }, [])

    console.log(questions);


    return (
        <div className={classes.root}>
            {
                questions &&
                questions.map((element,idx) => (
                    <Card className={classes.parent}>
                        <CardContent >
                            <Typography className={classes.question} color="textPrimary" gutterBottom>{element.question}</Typography>
                            <Divider /><Divider />
                            {
                                element.comments.map(reply =>
                                    <Typography className={classes.comment} color="textPrimary" gutterBottom>{reply.comment}</Typography>)
                            }
                        </CardContent>
                        {
                            <CardActions>
                                <TextField id="standard-basic" label="Write a comment. . ." className={classes.inp} value={element.inputComment}
                                onChange={(event)=>{
                                    let newState = [...questions];
                                    newState[idx].inputComment = event.currentTarget.value;
                                    setQuestions(newState);
                                }} />
                                <Button color="primary" size="small" onClick={()=>{
                                    postData('/viva/postComment',{
                                        id:id,question:element.question,
                                        comment:element.inputComment,
                                        email:localStorage.getItem('email')
                                    })
                                }}>Comment</Button>
                            </CardActions>
                        }
                    </Card>))
            }

        </div>
    )
}
