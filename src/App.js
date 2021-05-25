
import './App.css';
import React, { useState } from 'react';
import FrontPage from './authentication/frontPage';
import HomePage from './home/homePage';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ?
        <HomePage/> : 
        <FrontPage setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )

}



export default App;
