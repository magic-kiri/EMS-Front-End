
import React from 'react';
import AppBar from './field/appBar';
import SectionTop from './field/sectionTop';
import './style.css'

export default function HomePage(props) {
    return (
        <div>
            <AppBar  state = {{...props.state}} />
            <SectionTop/>
            
        </div>
    )
}
