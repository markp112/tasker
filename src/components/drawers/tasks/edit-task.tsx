import React, { useState } from 'react';
import { getControl } from '../common/common';
import { FREQUENCY, TASK_NAME, VALUE } from './common/common';
import { Frequency, initTask, Task } from './model/model';

type Props = {
  task: Task;
};

export function EditTask(props: Props) {
  const [editedTask, setEditedTask] = useState(props.task);

  function onFieldChange(key: string, value: string | number | Frequency) {
    const itemKey = editedTask[key as keyof Task];
    const tasks = { ...editedTask };
    switch(itemKey) {
      case '_id':
      case 'taskName':
        tasks[itemKey] = value as string;
        break;
      case 'frequency':
        tasks[itemKey] = value as Frequency;
        break;
      case 'value':
        tasks[itemKey] = value as number;
      break;
    }
    setEditedTask(tasks);
  }

  return (
    <span>
      { getControl(TASK_NAME(editedTask, onFieldChange)) }
      { getControl(FREQUENCY(editedTask, onFieldChange)) }
      { getControl(VALUE(editedTask, onFieldChange)) }
    </span>
  )
}