import React, { useContext, useEffect, useState } from 'react';
import './my-profile.css';
import { Avatar } from 'components/form-fields/avatar/avatar';
import { getUserProfile, saveUsersProfile } from 'services/user/profile/profile';
import { UserContext } from 'context/user-context';
import { initProfile, UserProfile } from 'services/user/profile/types';
import { getControl } from '../common/common';

export function MyProfile() {
  const userContext = useContext(UserContext);
  const [usersProfile, setUsersProfile] = useState<UserProfile>(initProfile);
  const [profileAvatar, setProfileAvatar] = useState<File>();
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userProfile = await getUserProfile(userContext.email);
      if (userProfile.email) {
        setUsersProfile(userProfile);
      }
    }
    fetchUserProfile();
  }, []);

  const onFieldChange = (key: string, value: string | number) => {
    const profile: UserProfile = { ...usersProfile };
    profile[key as keyof UserProfile ] = value.toString();
    setUsersProfile(profile);
    setIsDirty(true);
  };
  
  const onImageChange = (value: File) => {
    setProfileAvatar(value);
  }

  const saveProfile = () => {
    saveUsersProfile(usersProfile, profileAvatar);
    setIsDirty(false);
  };

  return (
    <div>
      <h2 className="my-profile-title">My Profile</h2>
      <Avatar
        url={usersProfile.avatarUrl} 
        onChange={(file: File) => onImageChange(file)}
      />
      { getControl('email', usersProfile.email, 'email', onFieldChange) }
      { getControl('firstName', usersProfile.firstName, 'first name', onFieldChange) }
      { getControl('surname', usersProfile.surname,'surname', onFieldChange) }
      { getControl('nickName', usersProfile.nickName, 'nick name', onFieldChange) }
      {
        isDirty &&
        <button className="text-button-skinny" onClick={() => saveProfile()}>Save</button>
      }
    </div>
  );
}
