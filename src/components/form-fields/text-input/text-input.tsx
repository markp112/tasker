import React, { ChangeEventHandler, useState } from 'react';
import { FieldControl } from '../types';
import './text-input.css';

type Props = {
  label: string,
  value: string,
  id: string,
  isRequired?: boolean,
  onChange: (key: string, value: string) => void;
};

export function TextInput(props: Props): JSX.Element {

  const [isValid, setIsValid] = useState(false);

  return (
    <span className="control-group">
      <label htmlFor={props.label}>{props.label}</label>
      <input 
        type="text" 
        className='input-field' 
        id={props.label}
        value={props.value}
        onChange={(e) => props.onChange(props.id, e.target.value)}
      />
    </span>
  );
}
