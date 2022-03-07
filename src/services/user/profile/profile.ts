import { FieldControl } from '@components/form-fields/types';
import { axiosClient } from 'services/axios/client';
import { UserProfile } from './types';
import { uploadImage } from './upload-image';

const UserProfilePath = 'user/profile'

function saveUsersProfile(profile: Map<string, FieldControl>, file?: File) {
  const avatar = profile.get('avatar');
  if (file) {
    const serverUrl = uploadImage(file);
    if (avatar) { avatar.value = 'serverUrl';
  } 
  }
  // axiosClient<string, Map<string, FieldControl>>('post', 'user/profile', profile);
}

async function getUserProfile(email: string): Promise<UserProfile> {
  const path = `${UserProfilePath}/${email}`;
  const profile = await axiosClient().get<UserProfile>(path);
  return profile;
}

export { saveUsersProfile, getUserProfile };
