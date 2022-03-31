import React, { useEffect, useState } from 'react';
import avatar from 'assets/icons/anonymous-72.png';
import './avatar.css';

type Props = {
  url: string;
  onChange: (value: File) => void;
}

function Avatar(props: Props) {

  const getNewAvatar = (fileList: FileList  | null) => {
    if (!fileList) return;
    const file = fileList[0];
    const previewImage = URL.createObjectURL(file);
    props.url = previewImage;
    props.onChange(file);
  }

  const getImage = (): string => {
    return props.url === '' ? avatar : props.url;
  }

  return (
    <>
      <span className="avatar-layout">
        <img  src={getImage()} alt=""  className="avatar" />
        <label htmlFor="upload-photo" className="text-button-skinny upload-button">Browse...</label>
        <input type="file" accept="image/*" name="avatarImage" id="upload-photo" onChange={(e) => getNewAvatar(e.target.files)}/>
      </span>
    </>
  )
}

export {
  Avatar,
}