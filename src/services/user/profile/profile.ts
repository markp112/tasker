import { axiosClient } from 'services/axios/client';
import { UserProfile } from './types';
import { uploadImage } from './upload-image';

const USER_PROFILE_PATH = 'user/profile';

function saveUsersProfile(profile: UserProfile, file?: File) {
  const email = profile.email;
  if (profile._id === '') profile._id = email;
  if (file && email) {
    const result = uploadImage(email as string, file);
  }
  if (email) {
    axiosClient().post(USER_PROFILE_PATH, profile)
    .then(result => {
      console.log(result)
    })
  }
}

async function getUserProfile(email: string): Promise<UserProfile> {
  const path = `${USER_PROFILE_PATH}/${email}`;
  const profile = await axiosClient().get<UserProfile>(path);
  return profile;
}

export { saveUsersProfile, getUserProfile };
