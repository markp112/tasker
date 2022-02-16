import React from 'react';
import './my-profile.css';
import { TextInput, FieldControl } from 'components/form-fields/text-input/text-input';
import avatar from 'assets/icons/anonymous-72.png';

export function MyProfile() {

  const nickName: FieldControl = {
    label: 'Nickname',
    maxLength: 40,
  };

  const getAvatar = () => {
    return (
      avatar
    );
  };

  const avatarStyle = {
    backgroundImage: avatar,
  };

  return (
    <div>
      <h2 className="my-profile-title">My Profile</h2>
      <span className="avatar" style={{
        backgroundImage: `url(${avatar})`
      }}></span>
      <TextInput fieldAttributes={nickName} />
    </div>
  );
}