import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/navbar/navbar';

function App() {
  const [isLoggedIn, setLoginState] = useState(false);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn}></Navbar>
    </div>
  );
}

export default App;
