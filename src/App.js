
import './App.css';
import React, { useState,useEffect } from 'react';
import FrontPage from './authentication/frontPage';
import HomePage from './home/homePage';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [teacherMode, setTeacherMode] = useState(true);
  const state = {
    teacherMode: teacherMode,
    setIsLoggedIn: setIsLoggedIn,
    setTeacherMode: setTeacherMode,
  }
  useEffect(()=>{
    if(localStorage.getItem('token') && localStorage.getItem('email')){
      setTeacherMode(localStorage.getItem('teacherMode')=='true');
      setIsLoggedIn(true);
    }
  } ,[])
  return (
    <div >
      {isLoggedIn ?
        <HomePage state = {state}  /> : 
        <FrontPage state = {state} />}
    </div>
  )

}
export default App;

