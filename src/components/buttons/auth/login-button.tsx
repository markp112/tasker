import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <span className="text-button mr-4" onClick={() => loginWithRedirect()}>
      Login
    </span>
  );
};
