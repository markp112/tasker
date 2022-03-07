import React, { createContext } from 'react';

type UserContextType = {
  token: string | undefined,
  email: string,
  isAuthenticated: boolean,
};

const defaultContext: UserContextType = {
  token: '',
  email: '',
  isAuthenticated: false,
};

const UserContext =  createContext<UserContextType>(defaultContext);

const userContextProvider = UserContext.Provider;
const userContextConsumer = UserContext.Consumer;

export {
  UserContext,
  userContextConsumer,
  userContextProvider,
};

export type { UserContextType };
