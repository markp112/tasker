import React, { useContext, useEffect, useState } from 'react';
import './my-profile.css';
import { TextInput } from 'components/form-fields/text-input/text-input';
import { getProfileFields } from 'services/system/profile';
import { FieldControl } from '@components/form-fields/types';
import { Avatar } from 'components/form-fields/avatar/avatar';
import { saveUsersProfile } from 'services/user/profile/profile';
import { UserContext } from 'context/user-context';

export function MyProfile() {
  const userContext = useContext(UserContext);
  const [usersProfile, setUsersProfile] = useState(new Map());
  const [profileAvatar, setProfileAvatar] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const [profileControls, setProfileControls] = useState<FieldControl[]>([]);

  useEffect(() => {
    getProfileFields()
    .then(fields => {
      const sortedFields = fields.sort((a, b) => a.displayOrder - b.displayOrder);
      setProfileControls(sortedFields);
    })
  }, []);

  const getControl = (control: FieldControl): JSX.Element => {
    switch(control.type) {
      case 'text':
        return <TextInput 
          fieldAttributes={control}
          key={control.label} 
          onChange={(value: string) => onFieldChange(value, control)}
        />;
      case 'image':
        return  <Avatar
          fieldAttributes={control}
          key={control.id}
          onChange={(value: string) => onFieldChange(value, control)}
        />
    }
  }

  const onFieldChange = (value: string, control: FieldControl) => {
    control.value = value;
    setUsersProfile(map => new Map(map.set(control.id, value)));
    setIsDirty(true);
  };

  const saveProfile = () => {
    console.log('%c%s', 'color: #731d6d', 'saveProfile');
    saveUsersProfile(usersProfile);
    setIsDirty(false);
  };

  return (
    <div>
      <h2 className="my-profile-title">My Profile</h2>
      { userContext.email }
      {
        profileControls.map(control => 
          getControl(control)
        )
      }
      {
        isDirty &&
        <button className="text-button-skinny" onClick={() => saveProfile()}>Save</button>
      }
    </div>
  );
}
