import { Switch, Route } from "react-router-dom";
import './App.css';
import React, { useState, useEffect } from 'react';
import FrontPage from './authentication/frontPage';
import HomePage from './home/homePage';
import EnterExam from './Exams/enterExam';
import { useParams } from "react-router";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [teacherMode, setTeacherMode] = useState(true);
  const { id } = useParams();
  const state = {
    teacherMode: teacherMode,
    setIsLoggedIn: setIsLoggedIn,
    setTeacherMode: setTeacherMode,
  }
  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('email')) {
      setTeacherMode(localStorage.getItem('teacherMode') == 'true');
      setIsLoggedIn(true);
    }
  }, [])
  let body = <HomePage state={state} />
  let body2 = <FrontPage state={state} />
  if (isLoggedIn) {
    return (
      <Switch>
               <Route
          path='/enter/:id'
          component={() => <EnterExam state={state} />}
        />
        <Route
          path='/'
          component={() => <HomePage state={state} />}
        />
      </Switch>
    )
  }
  else
  return (
    <div >
      <FrontPage state={state} />
    </div>
  )

}
export default App;

