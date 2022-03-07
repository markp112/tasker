import React, { useEffect } from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import { isUserRegistered } from 'services/user/registration/registration';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <span className="text-button mr-4" onClick={() => loginWithRedirect()}>
      Login
    </span>
  );
};



