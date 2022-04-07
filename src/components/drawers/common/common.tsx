import React from 'react';
import { SelectInput } from '../../form-fields/select/select';
import { TextInput } from '../../form-fields/text-input/text-input';

type ControlType = | 'text' | 'select';

type ControlParams = {
  key: string;
  value: string | number;
  label: string;
  controlType: ControlType;
  optionList?: string[];
  onFieldChange: (key: string, value: string | number) => void;
};

const textInput = (params: ControlParams): JSX.Element => {
  return  <TextInput 
    label= {params.label}
    value= {params.value.toString()}
    id= {params.key}
    onChange={(key: string, value: string) => params.onFieldChange(key, value)}
  />;
};

const selectInput = (params: ControlParams): JSX.Element => {
  if (!params.optionList) throw new Error('Select options missing');
  return  <SelectInput 
    label= {params.label}
    value= {params.value.toString()}
    optionValues = {params.optionList}
    id= {params.key}
    onChange={(key: string, value: string) => params.onFieldChange(key, value)}
  />;
};

export const getControl = (params: ControlParams): JSX.Element => {
  switch (params.controlType) {
    case 'text': 
      return textInput(params);
    case 'select':
      return selectInput(params);
  }
};

export type { ControlParams };
