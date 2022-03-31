import React, { useContext, useEffect, useState } from 'react';
import './my-profile.css';
import { TextInput } from 'components/form-fields/text-input/text-input';
import { FieldControl } from '@components/form-fields/types';
import { Avatar } from 'components/form-fields/avatar/avatar';
import { getUserProfile, saveUsersProfile } from 'services/user/profile/profile';
import { UserContext } from 'context/user-context';
import { initProfile, UserProfile } from 'services/user/profile/types';

export function MyProfile() {
  const userContext = useContext(UserContext);
  const [usersProfile, setUsersProfile] = useState<UserProfile>(initProfile);
  const [profileAvatar, setProfileAvatar] = useState<File>();
  const [isDirty, setIsDirty] = useState(false);
  const [profileControls, setProfileControls] = useState<FieldControl[]>([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userProfile = await getUserProfile(userContext.email);
      if (userProfile.email) {
        userProfile.avatarUrl = 'http://localhost:4200/mark.phillips1965@gmail.com/avatar.jpg'
        setUsersProfile(userProfile);
      }
    }
    fetchUserProfile();
  }, []);

  const getControl = (key: string, value: string, label: string): JSX.Element => {
    return  <TextInput 
      label= {label}
      value= {value}
      id= {key}
      onChange={(key: string, value: string) => onFieldChange(key, value)}
    />;
  };

  
  const onFieldChange = (key: string, value: string) => {
    const profile: UserProfile = { ...usersProfile };
    profile[key as keyof UserProfile ] = value;
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
      { getControl('email', usersProfile.email, 'email') }
      { getControl('firstName', usersProfile.firstName, 'first name') }
      { getControl('surname', usersProfile.surname,'surname') }
      { getControl('nickName', usersProfile.nickName, 'nick name') }
      {
        // isDirty &&
        <button className="text-button-skinny" onClick={() => saveProfile()}>Save</button>
      }
    </div>
  );
}
