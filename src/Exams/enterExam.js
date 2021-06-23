import React, { useState, useEffect } from 'react';
import './styles.css'
import MyAppBar from '../home/appBar'
import CreateViva from '../home/createViva';
import Profile from '../home/profile'
import TeacherView from './teacherView';
import StudentView from './studentView'

function EnterExam(props) {

    const [vivaModal, setVivaModal] = useState(false);
    const [page, setPage] = useState('home');
    const userEmail = localStorage.getItem('email');
    const { teacherMode, setIsLoggedIn, } = props.state;

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
    let viewComponent;
    
    if (teacherMode)
        viewComponent = <TeacherView state={props.state} />
    else
        viewComponent = <StudentView state={props.state} />



    return (
        <div>
            <MyAppBar state={state} />
            <CreateViva state={state} />
            {body}
            {viewComponent}
        </div>
    )
}

export default EnterExam
