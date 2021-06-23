  
import React, { useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import postData from '../../methods/postMethod';

import {  Typography, Button, Divider } from '@material-ui/core';



const useStyles = makeStyles({
    root:{
        // backgroundColor: 'green',
        height: '75vh',
        overflowY: 'scroll',
    },
    parent: {
        minWidth: 200,
        margin: "2%",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    question: {
        fontSize: 17,
    },
    comment:{
        // backgroundColor: 'red',
        // margin: "2%",
        fontSize: 12,
    },
    inp: {
        // backgroundColor: 'green',
        minWidth: '85%'
    }

});


export default function Questions(props) {
    const classes = useStyles();
    const [detail, setDetail] = useState(null);
    const [questions,setQuestions] = useState ([]);
    const { id ,teacherMode} = props.state
    useEffect(async () => {
        const res = await postData(`/viva/getVivaHistory`, { id: id })
        if (res.status === 200)
        {
            setQuestions(res.body.questions);
        }
    }, [])

    return (
        <div className = {classes.root}>
            {
                questions.map(element => (
                    <Card className={classes.parent}>
                        <CardContent >
                            <Typography className={classes.question} color="textPrimary" gutterBottom>{element.question}</Typography>
                            <Divider /><Divider />
                            {element.comments.map(reply => 
                                <Typography className={classes.comment} color="textPrimary" gutterBottom>{reply.comment}</Typography>
                            )}
                        </CardContent>
                        {
                            <CardActions>
                                <TextField id="standard-basic" label="Write a comment. . ." className={classes.inp} />
                                <Button color="primary" size="small">Comment</Button>
                            </CardActions>
                        }
                    </Card>))
            }

        </div>
    )
}
