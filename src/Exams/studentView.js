
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import postData from '../methods/postMethod';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { Typography, Button, Divider } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#cff8fc',
        flexGrow: 1,
        height: '90vh',
        // overflowY: 'scroll',
    },
    parent: {
        minWidth: 200,
        margin: "2%",
        boxShadow: theme.shadows[5],
    },
    question: {
        fontSize: 17,
    },
    container: {
        // backgroundColor: 'red',
        width: '65vw',
        overflowY: 'scroll',
    },
    title: {
        fontSize: 26,
        paddingTop: '35vh',
        paddingLeft: '22vw',
    }
}));




export default function StudentView(props) {

    const classes = useStyles();
    const [permission, setPermission] = useState(false);

    let { id } = useParams();


    const [questions, setQuestions] = useState([]);

    async function loadQuestion() {
        const response = await postData(`/exam/verifyPermission`, { email: localStorage.getItem('email'), id: id })
        if (response.status === 200) {
            console.log(response.body.permission);
            setPermission(response.body.permission);
        }

        const res = await postData(`/viva/getVivaHistory`, { id: id })
        if (res.status === 200) {
            const { questions } = res.body;
            const newState = questions.map(element => {
                element.inputComment = "";
                return element;
            })
            setQuestions(newState);
        }
    }

    useEffect(() => {


        const id = setInterval(loadQuestion, 800);
        loadQuestion();
        return () => {
            clearInterval(id);
        }
    }, [])





    let component;
    if (!permission) {
        component = (
            <div className={classes.root}>
                <div className={classes.container}>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>You Are In Waiting List</Typography>
                </div>
            </div>
        )
    }
    else {
        component = (
            <div className={classes.root}>
                <div className={classes.container}>
                    {
                        questions &&
                        questions.map((element, idx) => (
                            <Card className={classes.parent}>
                                <CardContent >
                                    <Typography className={classes.question} color="textPrimary" gutterBottom>{element.question}</Typography>
                                    <Divider /><Divider />

                                </CardContent>
                            </Card>))
                    }
                </div>

            </div>)
    }

    return (
        <div>
            {component}
        </div>
    )
}
