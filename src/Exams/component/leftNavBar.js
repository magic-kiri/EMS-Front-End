

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Stopwatch from '../../Stopwatch';
import { useParams } from 'react-router-dom';
import postData from '../../methods/postMethod';

const drawerWidth = 310;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: "-5%",
    },
    drawer: {

        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        marginTop: "4.6%",
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        marginLeft: theme.spacing(40),
        marginRight: theme.spacing(40),
        marginTop: theme.spacing(-10),
        marginBottom: theme.spacing(20),
        padding: theme.spacing(3)
    },
    divide: {
        borderStyle: "dotted"
    },
    button: {
        margin: theme.spacing(2),
    }
}));

export default function LeftNavBar(props) {
    const classes = useStyles();
    const { data,teacherMode } = props.state;
    let { id } = useParams();
    console.log(data);
    const handleAdd = async (e) => {
        const url = '/exam/addtoviva';
        console.log(e);
        const reqBody = {

            question: e,
            id: id
        }
        const res = await postData(url, reqBody);
    }

    const handleDelete = (e) => {
        console.log(e);
    }

    return (
        <div className={classes.root}>
            {teacherMode &&
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{ paper: classes.drawerPaper }}
                    anchor="left">
                    <div className={classes.toolbar} />
                    <List>
                        <Stopwatch id={id} />
                        <ListItem ><h3>&nbsp; &nbsp; &nbsp;  Question Bank</h3></ListItem>
                    </List>
                    <List>
                        {data.map(text => (
                            <div>
                                <Divider className={classes.divide} />
                                <ListItem >
                                    <ListItemText primary={text} />
                                    <IconButton aria-label="add" value={text.question} onClick={() => handleAdd(text)}>
                                        <AddCircleIcon color="primary" />
                                    </IconButton>
                                    <IconButton aria-label="delete" value={text.question} onClick={() => handleDelete(text)}>
                                        <DeleteIcon color="secondary" />
                                    </IconButton>
                                </ListItem>
                            </div>
                        ))}
                    </List>
                </Drawer>
            }
        </div>)
}
