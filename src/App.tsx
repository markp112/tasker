import React, { useState } from 'react';
import './App.css';
import './css/colours.css';
import './css/buttons.css';
import { Navbar } from './components/navbar/navbar';
import { useAuth0 } from '@auth0/auth0-react';
import { Drawer } from 'components/drawers/drawer/drawer';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showDrawer, setShowDrawer] = useState(false);
  const [childContent, setChildContent] = useState('');

  const displayDrawer = (drawContent: string) => {
    setChildContent(drawContent);
    setShowDrawer(true);
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isAuthenticated} displayDrawer={(drawContent: string) => displayDrawer(drawContent)} />
      {
        showDrawer &&
        <Drawer 
          showDrawer={(isVisible) => setShowDrawer(isVisible)}
          childContent={childContent}
        />
      }
    </div>
  );
}

export default App;
