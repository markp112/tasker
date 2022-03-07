import { User } from '@auth0/auth0-spa-js';
import { axiosClient } from 'services/axios/client';


const UserProfilePath = 'user/registration';


function logError(errMsg: string) {
  console.log(errMsg);
}

async function isUserRegistered(email: string | undefined): Promise<boolean> {
  if (!email) logError('isUserRegistered missing email');
  const path = `${UserProfilePath}/${email}`;
  const profile = await axiosClient().get<boolean>(path);
  return profile;
}

async function registerUser(user: User): Promise<boolean> {
  const path = `${UserProfilePath}`;
  const result = await axiosClient().post(path, user.email);
  return result === 'success' ? true : false;
} 

export { 
  isUserRegistered,
  registerUser,
}