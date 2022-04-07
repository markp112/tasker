import React, { ChangeEventHandler, useState } from 'react';
import { Props } from '../types';
import './text-input.css';
import '../css/form-fields.css';

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
