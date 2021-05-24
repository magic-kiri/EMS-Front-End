
import './App.css';
import React, { useState, useEffect } from 'react';
import FrontPage from './authentication/frontPage';


function HomePage() {
  return <p>HOME</p>
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ?
        <HomePage /> : 
        <FrontPage isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )

}



export default App;
