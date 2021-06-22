import React, { useState, useEffect } from 'react';
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
import RightNavBar from './component/rightNavBar'
import BottomNavbar from './component/bottomNavbar';
import Questions from './component/questions';

const drawerWidth = 310;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // backgroundColor: 'red',
        flexGrow: 1,
        height: '90vh',
    },
    leftBar: {
        // backgroundColor: 'green',
        boxShadow: theme.shadows[5],
        // flexGrow: 1,
        width: '22vw',
        height: '100%',
    },
    mid: {
        // backgroundColor: 'purple',
        flexGrow: 1,
    },
    rightBar: {
        // backgroundColor: 'green',
        boxShadow: theme.shadows[5],
        // flexGrow: 1,
        height: '100%',
        width: '20vw',
    },


}));
function EnterExam(props) {
    let { id } = useParams();
    const [waitingList, setWaitingList] = useState([]);
    const [data, setData] = useState([]);
    const [regList, setList] = useState([]);
    const [cardQuestion, setCardQuestion] = useState(null);
    const [Inp, setInp] = useState('');
    const [vivaModal, setVivaModal] = useState(false);
    const [page, setPage] = useState('home');
    const userEmail = localStorage.getItem('email');
    const { teacherMode, setIsLoggedIn, } = props.state;
    console.log(id);
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

    // useEffect(async () => {
    //     const url = "/exam/getQuestions/";
    //     console.log(url);
    //     const res = await postData(url, reqBody);
    //     const setter = res.body;
    //     setData(setter);
    //     const res2 = await getData("/exam/joinList/" + id);
    //     setList(res2.body)
    // }, [])

    useEffect(async () => {
        const res = await getData(`/viva/waitingList/${id}`);
        if (res.status === 200)
            setWaitingList(res.body);


    }, []);



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


    return (
        <div>
            <MyAppBar state={state} />
            <CreateViva state={state} />
            {body}
            <div className={classes.root}>

                {
                    teacherMode &&
                    <div className={classes.leftBar}>
                        <LeftNavBar state={{ waitingList: waitingList, teacherMode: teacherMode, }} />
                    </div>
                }
                <div className={classes.mid}>
                    <Questions state={{id:id , teacherMode: teacherMode}}/>
                    <BottomNavbar />
                </div>
                {
                    teacherMode &&
                    <div className={classes.rightBar}>
                        <RightNavBar state={{ waitingList: waitingList, teacherMode: teacherMode, }} />
                    </div>
                }
            </div>
            {/* <main className={classes.content}>
                <div className={classes.toolbar} />
                <QuestionCard state={state} id={id}  teacherMode={teacherMode} text={questionData}/>
                
                Bottom portion
                {teacherMode &&
                    <div>
                        <textarea onChange={(e) => setInp(e.target.value)} placeholder="Ask a question. . ."
                            style={{ position: "fixed", width: "46.5%", bottom: "0", left: "310px",
                                right: "310px", height: "50px", background: "#EDEDED" }}>
                        </textarea>
                        <Button color='primary' variant="contained" onClick={handleButtonAdd} style={{
                            position: "fixed", right: "310px", bottom: 0, width: "10%", height: "50px"}} > Add </Button>
                    </div>
                }
            </main> */}

            {/* <div className={classes.root}>

                {  teacherMode && <RightNavBar state={{ waitingList: waitingList }} />}
                <RightNavBar state={{ data: data, teacherMode: teacherMode, }} />
                
            </div> */}
        </div>
    )
}

export default EnterExam
