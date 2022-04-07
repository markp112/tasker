type Frequency = | 'daily' | 'weekly' | 'bi-weekly' | 'monthly' | 'adhoc';

const FREQUENCY_OPTION: string[] = [
  'daily',  
  'weekly',
  'bi-weekly',
  'monthly',
  'adhoc',
];

type Task = {
  _id?: string;
  taskName: string;
  frequency: Frequency;
  value: number
};

type TaskList = Task[];

const initTask: Task = {
  taskName: '',
  frequency: 'adhoc',
  value: 0
};

export type {
  Frequency,
  Task,
  TaskList,
};

export { initTask, FREQUENCY_OPTION };
