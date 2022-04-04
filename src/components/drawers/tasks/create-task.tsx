import React, { useState } from 'react';
import { getControl } from '../common/common';
import { initTask, Task } from './model/model';
import './tasks.css';


export function CreateTask() {
  const [task, setTask] = useState<Task>(initTask);
  const [isDirty, setIsDirty] = useState(false);

  const onFieldChange = (key: string, value: string | number) => {
  console.log('%c%s', 'color: #ffa280', 'onFieldChange');

  }

  const saveTask = () => {
    console.log('%c⧭', 'color: #364cd9', 'saveTask');

  }

  return (
    <div>
      <h2 className="task-title">Create Task</h2>
      { getControl('taskName', task.taskName, 'Task Name', onFieldChange) }
      { getControl('frequency', task.frequency, 'Frequency', onFieldChange) }
      { getControl('value', task.value, 'Value', onFieldChange) }
      {
        isDirty &&
        <button className="text-button-skinny" onClick={() => saveTask()}>Save</button>
      }
    </div>
  );

}