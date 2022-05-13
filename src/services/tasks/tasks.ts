import { axiosClient } from 'services/axios/client';
import { Task } from '@components/drawers/tasks/model/model';
import { Response } from 'services/types/types';

const TASK_ROUTE = 'tasks';

function saveTask(task: Task): Promise<Response> {
  return new Promise((resolve, reject) => {
    if (!task._id || task._id === '') {
      axiosClient().post(`${TASK_ROUTE}/task`, task)
      .then(result => {
        resolve(result as Response);
      })
    } else {
      axiosClient().put<Task>(`${TASK_ROUTE}/task/${task._id}`, task)
      .then(result => {
        console.log({result});
        resolve(result as Response)
      })
    }
  })
}

function getTasks(): Promise<Task[]> {
  return new Promise((resolve, reject) => {
    axiosClient().get<Task[]>(TASK_ROUTE)
    .then((result) => {
      resolve(result)
    })
  })
}

export { saveTask, getTasks };
