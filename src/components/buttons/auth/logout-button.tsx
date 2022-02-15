import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <span className="text-button mr-4" onClick={() => logout()}>
      Logout
    </span>
  );
};
