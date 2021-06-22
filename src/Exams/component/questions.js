  
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
        margin: "2%",
        fontSize: 12,
    },
    inp: {
        minWidth: '85%'
    }

});


export default function Questions(props) {
    const classes = useStyles();
    const [detail, setDetail] = useState(null);
    const bank = [
        "This is a question no 1. what you think?? true or false ",
        "This is a question no 1. what you think?? true or false ",
        "This is a question no 1. what you think?? true or falseThis is a question no 1. what you think?? true or false",
        "This is a question no 1. what you think?? true or false "]

    const { id ,teacherMode} = props.state
    useEffect(async () => {
        const res = await postData(`/viva/getVivaHistory`, { id: id })
        if (res.status === 200)
            setDetail(res.body);
    }, [])

    return (
        <div className = {classes.root}>
            {
                detail && detail.question &&
                detail.questions.map(element => (
                    <Card className={classes.parent}>
                        <CardContent>
                            <Typography className={classes.question} color="textPrimary" gutterBottom>{element.question}</Typography>
                            <Divider /><Divider />
                            {teacherMode &&<Typography className={classes.comment} color="textPrimary" gutterBottom>{element.comment}</Typography>}
                        </CardContent>
                        {teacherMode &&
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
