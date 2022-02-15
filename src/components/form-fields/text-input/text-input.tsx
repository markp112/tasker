import React from 'react';
import './text-input.css';

type FieldControl = {
  label: string;
  required?: boolean;
  maxLength?: number;
  placeHolder?: string;
}; 

type Props = {
  fieldAttributes: FieldControl;
}

export function TextInput(props: Props): JSX.Element {

  return (
    <div>
      <label htmlFor="textInput">{props.fieldAttributes.label}</label>
      <input type="text" className='input-field'/>
    </div>
  );
}

export type { FieldControl };
