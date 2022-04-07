import { User } from '@auth0/auth0-spa-js';
import { axiosClient } from 'services/axios/client';


const ROUTE = 'user/registration';

function logError(errMsg: string) {
  console.log(errMsg);
}

async function isUserRegistered(email: string | undefined): Promise<boolean> {
  if (!email) logError('isUserRegistered missing email');
  const path = `${ROUTE}/${email}`;
  const profile = await axiosClient().get<boolean>(path);
  return profile;
}

async function registerUser(user: User): Promise<boolean> {
  const path = `${ROUTE}`;
  const result = await axiosClient().post(path, user.email);
  return result.data === 'success' ? true : false;
} 

export { 
  isUserRegistered,
  registerUser,
}