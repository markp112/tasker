import React from 'react';
import './my-profile.css';
import { TextInput, FieldControl } from 'components/form-fields/text-input/text-input';

export function MyProfile() {

  const nickName: FieldControl = {
    label: 'Nickname',
    maxLength: 40,
  }

  return (
    <div>
      <h2 className='my-profile-title'>My Profile</h2>
      <TextInput fieldAttributes={nickName} />
    </div>
  );
}