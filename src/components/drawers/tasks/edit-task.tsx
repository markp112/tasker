import React, { useState } from 'react';
import { getControl } from '../common/common';
import { FREQUENCY, TASK_NAME, VALUE } from './common/common';
import { Frequency, initTask, Task } from './model/model';
import saveIconInactive from '../../../assets/icons/diskette-inactive-24.png';
import saveIconActive from '../../../assets/icons/diskette-active-24.png';
import './tasks.css';
import './tasks.css';
import { saveTask } from 'services/tasks/tasks';

type Props = {
  task: Task;
  closeEdit: (task: Task) => void;
};

export function EditTask(props: Props) {
  const [editedTask, setEditedTask] = useState(props.task);
  const [isDirty, setIsDirty] = useState(false);
  const [saveIcon, setSaveIcon] = useState(saveIconInactive);

  function onFieldChange(key: string, value: string | number | Frequency) {
    const tasks = { ...editedTask };
    switch(key) {
      case '_id':
      case 'taskName':
        tasks[key] = value as string;
        break;
      case 'frequency':
        tasks[key] = value as Frequency;
        break;
      case 'value':
        tasks[key] = value as number;
      break;
    }
    setEditedTask(tasks);
    setIsDirty(true);
  }

  function onSaveClick() {
    if (isDirty) {
      saveTask(editedTask).then((
        () => {
          setIsDirty(false);
          props.closeEdit(editedTask);
        }
      ))
      .catch((err) => console.log(err));
    }
  }

  return (
    <div className='row'>
      <span className='task-edit'>
        { getControl(TASK_NAME(editedTask, onFieldChange, '')) }
        { getControl(FREQUENCY(editedTask, onFieldChange, '')) }
        { getControl(VALUE(editedTask, onFieldChange, '')) }
      </span>
      <img 
        src={saveIcon}
        alt="Save changes"
        className="save-icon"
        onClick={onSaveClick}
        onMouseOver={() => setSaveIcon(saveIconActive)}
        onMouseOut={() => setSaveIcon(saveIconInactive)}
      />
    </div>
  )
}