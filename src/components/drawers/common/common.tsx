import React from 'react';
import { TextInput } from '../../form-fields/text-input/text-input';

export const getControl = (key: string, value: string | number, label: string, onFieldChange: (key: string, value: string | number) => void): JSX.Element => {
  return  <TextInput 
    label= {label}
    value= {value.toString()}
    id= {key}
    onChange={(key: string, value: string) => onFieldChange(key, value)}
  />;
};
