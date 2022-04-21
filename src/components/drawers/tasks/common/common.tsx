import { ControlParams } from '@components/drawers/common/common';
import { FREQUENCY_OPTION, Task } from '../model/model';

const TASK_NAME = (task: Task, onFieldChange: (key: string, value: string | number) => void): ControlParams => { 
  return { controlType:'text', value: task.taskName, label: 'Task Name', key: 'taskName', onFieldChange: onFieldChange };
};
const VALUE = (task: Task, onFieldChange: (key: string, value: string | number) => void): ControlParams => {
  return  { controlType: 'text', value: task.value, label: 'Value', key: 'value', onFieldChange: onFieldChange };
};
const FREQUENCY = (task: Task, onFieldChange: (key: string, value: string | number) => void): ControlParams => {
  return  { controlType: 'select', optionList: FREQUENCY_OPTION, key: 'frequency', value: task.frequency, label: 'Frequency', onFieldChange: onFieldChange };
};

export {
  TASK_NAME,
  VALUE,
  FREQUENCY,
};