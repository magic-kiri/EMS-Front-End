import React, { useState,useEffect } from 'react';
import './styles.css'
import MyAppBar from '../home/appBar'
import { useParams } from 'react-router-dom';
import CreateViva from '../home/createViva';
import Profile from '../home/profile'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import QuestionCard from './questionCard';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import postData from '../methods/postMethod';
import getData from '../methods/getMethod';
import Stopwatch from '../Stopwatch';
import Button from '@material-ui/core/Button';
import LeftNavBar from './component/leftNavBar';


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
function EnterExam(props) {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [regList, setList] = useState([]);
    const [cardQuestion, setCardQuestion] = useState(undefined);
    const [Inp, setInp] = useState('');
    const [vivaModal, setVivaModal] = useState(false);
    const [page, setPage] = useState('home');
    const userEmail = localStorage.getItem('email');
    const { teacherMode, setIsLoggedIn, } = props.state;

    const reqBody = {
        email: userEmail
    }
    const state = {
        ...props.state,
        page: page,
        setPage: setPage,
        vivaModal: vivaModal,
        setVivaModal: setVivaModal
    };
    let body;

    if (page === 'profile') {
        body = <Profile className='body' state={state} />;
    }
    
    useEffect(async () => {
        const url = "/exam/getQuestions/";
        console.log(url);
        const res = await postData(url, reqBody);
        const setter = res.body;
        setData(setter);
        const res2 = await getData("/exam/joinList/" + id);
        setList(res2.body)
    }, [])
    const [questionData, setQuestionData] = useState("");
    console.log(data);
    const classes = useStyles();
    
    const handleButtonAdd = async () => {
        const url = '/exam/addtoviva';
        const reqBody = {

            question: Inp,
            id: id
        }
        const res = await postData(url, reqBody);
    }
    
    const handleStudent = (e) => {
        console.log('studentAdd');
        console.log(e);
        const url = "/exam/delete/" + id;
        const url2 = "/exam/addQuestions/" + id;
        const reqBody = { value: e };
        const reqBody2 = { registrationNumber: e, questions: [], marks: 0 };

        const res = postData(url, reqBody);
        const res2 = postData(url2, reqBody2)
        // window.location.reload();
        console.log(res);
    }
    return (
        <div>

            <MyAppBar
                state={state}
            />

            <CreateViva
                state={state}
            />
            {body}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <QuestionCard
                    state={state}
                    id={id}
                    teacherMode={teacherMode}
                    text={questionData}
                />
                {teacherMode &&
                    <div>
                        <textarea
                            onChange={(e) => {
                                setInp(e.target.value);
                            }}
                            placeholder="Ask a question. . ."
                            style={{
                                position: "fixed", width: "46.5%", bottom: "0", left: "310px", 
                                right: "310px", height: "50px",background: "#EDEDED"}}>
                        </textarea>
                        <Button color='primary' variant="contained" onClick={handleButtonAdd} style={{
                            position: "fixed",
                            right: "310px",
                            bottom: 0,
                            width: "10%",
                            height: "50px"
                        }}>Add</Button>
                    </div>
                }
            </main>

            <div className={classes.root}>

                <LeftNavBar state={{data:data, teacherMode:teacherMode,}}/>

                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="right"
                >
                    <div className={classes.toolbar} />

                    <List>
                        {!teacherMode &&
                            <Stopwatch
                                id={id}
                            />
                        }

                        <ListItem >
                            <h3>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Requests</h3>
                        </ListItem>

                    </List>
                    <List>
                        {regList.map(text => (
                            <div>
                                <Divider className={classes.divide} />
                                <ListItem >
                                    <ListItemText primary={text} />
                                    <IconButton aria-label="add" value={text} onClick={(event) => handleStudent(text)}>
                                        <AddCircleIcon color="primary" />
                                    </IconButton>
                                </ListItem>
                            </div>
                        ))}
                    </List>
                </Drawer>
            </div>


        </div>
    )
}

export default EnterExam
