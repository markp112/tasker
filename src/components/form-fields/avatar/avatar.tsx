import React, { useEffect, useState } from 'react';
import { FieldControl } from '../types';
import avatar from 'assets/icons/anonymous-72.png';
import './avatar.css';

type Props = {
  fieldAttributes: FieldControl;
  onChange: (value: string) => void;
}

function Avatar(props: Props) {

  const [imageUrl, setImageUrl] = useState(avatar);

  useEffect(() => {
    props.fieldAttributes.value === '' ? setImageUrl(avatar) : props.fieldAttributes.value;
    }
  , []);

  const getNewAvatar = (fileList: FileList  | null) => {
    if (!fileList) return;
    const file = fileList[0];
    const previewImage = URL.createObjectURL(file);
    setImageUrl(previewImage);
    props.onChange(previewImage);
  }

  return (
    <>
      <span className="avatar-layout">
        <span
          className="avatar"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
        </span>
        <label htmlFor="upload-photo" className="text-button-skinny upload-button">Browse...</label>
        <input type="file" accept="image/*"  id="upload-photo" onChange={(e) => getNewAvatar(e.target.files)}/>
      </span>
    </>
  )
}

export {
  Avatar,
}