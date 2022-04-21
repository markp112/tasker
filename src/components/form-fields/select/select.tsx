import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { Props } from '../types';
import './select.css';
import '../css/form-fields.css';

export function SelectInput(props: Props) {

  const [listValues, setListValues] = useState<string[]>([]);
  useEffect(() => {
    props.optionValues ? setListValues(props.optionValues) : setListValues([]);
  }, []);

  const getOption = (option: string) => {
    if (props.value === option) {
      return (
        <option
        key={option}
        value={option}
        selected
        >{option}</option>
      )
    } else {
      return (

        <option
        key={option}
        value={option}
        >{option}</option>
      )}
  }
  return (
    <span className="control-group">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        className="arrow"
        name="select-control"
        id={props.id}
        onChange={(e) => props.onChange(props.id, e.target.value)}
      >
        {listValues.map(option => 
          getOption(option)
        )}
      </select>
    </span>
  )
}