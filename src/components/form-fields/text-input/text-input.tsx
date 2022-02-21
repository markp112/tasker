import React, { ChangeEventHandler, useState } from 'react';
import './text-input.css';

type FieldControl = {
  id: string;
  label: string;
  required?: boolean;
  maxLength?: number;
  placeHolder?: string;
}; 

type Props = {
  fieldAttributes: FieldControl;
  onChange: (value: string) => void;
};

export function TextInput(props: Props): JSX.Element {

  const [isValid, setIsValid] = useState(false);

  return (
    <span className="control-group">
      <label htmlFor={props.fieldAttributes.label}>{props.fieldAttributes.label}</label>
      <input 
        type="text" 
        className='input-field' 
        id={props.fieldAttributes.label}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </span>
  );
}

export type { FieldControl };
