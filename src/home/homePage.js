
import React, { useState,useEffect } from 'react';
import AppBar from './appBar';
import Home from './fieldHome/body';
import Profile from './profile';
import './style.css'
import ExamModal from './createExam';

export default function HomePage(props) {
    
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState('profile');
    const state = {
        ...props.state,
        page: page,
        setPage: setPage,
        open: open,
        setOpen: setOpen,
    };
    let body;
    
    if(page==='home')
    {
        body = <Home state={state}/>;
    }
    else if(page==='profile')
    {
        body = <Profile/>;
    }

    return (
        <div>
            <AppBar state={state} />
            <ExamModal state={state}/>
            {body}
        </div>
    )
}
