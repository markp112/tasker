import React, { useState } from 'react';
import { saveTask } from 'services/tasks/tasks';
import { Response } from 'services/types/types';
import { ControlParams, getControl } from '../common/common';
import { FREQUENCY, TASK_NAME, VALUE } from './common/common';
import { Frequency, FREQUENCY_OPTION, initTask, Task } from './model/model';
import './tasks.css';

type SaveResult = {
  result: {
    id: string;
  },
};

export function CreateTask() {
  const [task, setTask] = useState<Task>(initTask);
  const [isDirty, setIsDirty] = useState(false);
  
  const onFieldChange = (key: string, value: string | number) => {
  const tempTask = { ...task };
  const asKey = key as keyof Task;
  switch(asKey) {
    case '_id':
      case 'taskName':
        tempTask[asKey] = value.toString();
        break;
        case 'frequency':
          tempTask[asKey] = value as Frequency;
          break;
          case 'value':
            tempTask[asKey] = value as number;
          }
          setTask(tempTask);
          setIsDirty(true);
        };
        
        const save = () => {
          saveTask(task)
          .then((result: Response) => {
            if (result.status === 201) {
              const id = (result.data as SaveResult).result.id;
              onFieldChange('_id', id);
            } 
            })
          .catch(err => {
            console.log(err);
          })
            setIsDirty(false);
          }

  return (
    <div>
      <h2 className="task-title">Create Task</h2>
      { getControl(TASK_NAME(task, onFieldChange)) }
      { getControl(FREQUENCY(task, onFieldChange)) }
      { getControl(VALUE(task, onFieldChange)) }
      {
        isDirty &&
        <button className="text-button-skinny" onClick={() => save()}>Save</button>
      }
    </div>
  );

}