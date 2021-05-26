
import React, { useState,useEffect } from 'react';
import AppBar from './field/appBar';
import Home from './field/body';
import './style.css'

export default function HomePage(props) {
    const [page, setPage] = useState('home');
    const state = {
        ...props.state,
        page: page,
        setPage: setPage
    };
    let body;
    
    if(page==='home')
    {
        body = <Home state={state}/>;
    }
    else if(page==='profile')
    {

    }

    return (
        <div>
            <AppBar state={state} />
            {body}
        </div>
    )
}
