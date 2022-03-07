import React, { useEffect, useState } from 'react';
import './App.css';
import './css/variables.css';
import './css/buttons.css';
import { Navbar } from './components/navbar/navbar';
import { useAuth0 } from '@auth0/auth0-react';
import { Drawer } from 'components/drawers/drawer/drawer';
import { UserContext, userContextProvider, UserContextType } from 'context/user-context';
import { getUserProfile } from 'services/user/profile/profile';
import { isUserRegistered, registerUser } from 'services/user/registration/registration';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showDrawer, setShowDrawer] = useState(false);
  const [childContent, setChildContent] = useState('');

  const userContext: UserContextType = {
    isAuthenticated: isAuthenticated,
    email: user ?  user.email as string : '',
    token: '',
  };

  useEffect(() => {
    isAuthenticated
    if (isAuthenticated && user) {
      if (!isUserRegistered(user.email)) {
          registerUser(user)
          .then(result => {
            console.log(result);
          }) 
        console.log("got here")
      }
    }
  }, [isAuthenticated])
  // useEffect(() => {
  //   if (isAuthenticated && user?.email) {
  //     getUserProfile(user?.email)
  //     .then((profile) => console.log('called'))
  //   }
  // }, [isAuthenticated])

  const displayDrawer = (drawContent: string) => {
    setChildContent(drawContent);
    setShowDrawer(true);
  };

  return (
      <UserContext.Provider value={userContext}>
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
    </UserContext.Provider>
  );
}

export default App;
