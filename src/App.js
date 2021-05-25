
import './App.css';
import React, { useState } from 'react';
import FrontPage from './authentication/frontPage';
import HomePage from './home/homePage';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [teacherMode, setTeacherMode] = useState(true);
  const state = {
    teacherMode: teacherMode,
    setIsLoggedIn: setIsLoggedIn,
    setTeacherMode: setTeacherMode,
  }
  return (
    <div>
      {isLoggedIn ?
        <HomePage state = {state}  /> : 
        <FrontPage state = {state} />}
    </div>
  )

}



export default App;
