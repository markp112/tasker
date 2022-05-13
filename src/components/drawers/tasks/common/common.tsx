import { ControlParams } from '@components/drawers/common/common';
import { FREQUENCY_OPTION, Task } from '../model/model';

const TASK_NAME = (task: Task, onFieldChange: (key: string, value: string | number) => void, label = 'Task Name'): ControlParams => { 
  return { controlType:'text', value: task.taskName, label: label, key: 'taskName', onFieldChange: onFieldChange };
};
const VALUE = (task: Task, onFieldChange: (key: string, value: string | number) => void, label = 'Value'): ControlParams => {
  return  { controlType: 'text', value: task.value, label: label, key: 'value', onFieldChange: onFieldChange };
};
const FREQUENCY = (task: Task, onFieldChange: (key: string, value: string | number) => void, label = 'Frequency'): ControlParams => {
  return  { controlType: 'select', optionList: FREQUENCY_OPTION, key: 'frequency', value: task.frequency, label: label, onFieldChange: onFieldChange };
};

export {
  TASK_NAME,
  VALUE,
  FREQUENCY,
};