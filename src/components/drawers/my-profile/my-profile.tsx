import React, { useState } from 'react';
import './my-profile.css';
import { TextInput, FieldControl } from 'components/form-fields/text-input/text-input';
import avatar from 'assets/icons/anonymous-72.png';
const profileControls: FieldControl[] = [
  {
    id: 'email',
    label: 'e-mail',
    maxLength: 60,
    required: true,
  },
  {
    id: 'firstname',
    label: 'firstname',
    maxLength: 40,
    required: true,
  },
  {
    id: 'surname',
    label: 'surname',
    maxLength: 60,
    required: true,
  },
  {
    id: 'nickname',
    label: 'nickname',
    maxLength: 40,
  },
];




export function MyProfile(): JSX.Element  {

  const [usersProfile, setUsersProfile] = useState(new Map());

  const onFieldChange = (value: string, key: string) => {
    setUsersProfile(map => new Map(map.set(key, value)));
  };

  return (
    <div>
      <h2 className="my-profile-title">My Profile</h2>
      <span className="avatar" style={{ backgroundImage: `url(${avatar})` }}>
      </span>
      {
        profileControls.map(control => 
          <TextInput 
            fieldAttributes={control} key={control.label} 
            onChange={(value: string) => onFieldChange(value, control.id)}
          />
        )
      }
      
    </div>
  );
}
