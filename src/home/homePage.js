
import React from 'react';
import AppBar from './field/appBar';
import Body from './field/body';
import SectionTop from './field/sectionTop';
import './style.css'

export default function HomePage(props) {
    const state = {...props.state};
    return (
        <div>
            <AppBar  state = {state}/>
            <SectionTop state = {state}/>
            <Body/>
        </div>
    )
}
