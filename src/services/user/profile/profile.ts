import { axiosClient } from 'services/axios/client';
import { UserProfile } from './types';
import { uploadImage } from './upload-image';

const UserProfilePath = 'user/profile';


function saveUsersProfile(profile: UserProfile, file?: File) {
  const email = profile.email;
  if (profile._id === '') profile._id = email;
  if (file && email) {
    const result = uploadImage(email as string, file);
  }
  if (email) {
    axiosClient().post(UserProfilePath, profile)
    .then(result => {
      console.log(result)
    })
  }
}

async function getUserProfile(email: string): Promise<UserProfile> {
  const path = `${UserProfilePath}/${email}`;
  const profile = await axiosClient().get<UserProfile>(path);
  return profile;
}

export { saveUsersProfile, getUserProfile };
