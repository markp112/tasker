import React, { useEffect, useState } from 'react';
import { getTasks } from 'services/tasks/tasks';
import { Task } from './model/model';
import './tasks.css';
import deleteIcon from '../../../assets/icons/trash_can-24.png';
import pencilIcon from '../../../assets/icons/pencil-24.png';
import { EditTask } from './edit-task';


export function TaskList() {

  const [taskList, setTaskList] = useState<Task[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState('');
  const [showModalPopup, setShowModalPopup] = useState(false);

  useEffect(() => {
    const getTaskList = async() =>{
      const taskList = await getTasks();
      if(taskList.length > 0) {
        setTaskList(taskList)
      }
    };
    getTaskList();
  }, []);

  const editTaskClick = (id: string) => {
    setIsEditing(true);
    if (id) {
      setId(id);
    }
  }

  const deleteTask = (id: string) => {
    setShowModalPopup(true);
  }

  const closeEditWindow = (editedTask: Task) => {
    setIsEditing(false);
    const updatedList = taskList.map(task => 
      task._id === editedTask._id ? editedTask : task
      );
    setTaskList(updatedList);
  }

  const getTaskItem = (task: Task) => {
    if (isEditing && id === task._id) {
      return ( isEditing && 
        <EditTask 
          task={task}
          closeEdit={(task: Task) => closeEditWindow(task)}
        />
      )
    } else {
      return (
        <span key={task._id} className="row">
          <li  className="task-list-item">
            <span>{task.taskName}</span>
            <span>{task.frequency}</span>
            <span>{task.value}</span>
          </li>
          <span className="icons">
            <img 
              src={pencilIcon} alt="Edit"
              onClick={() => editTaskClick(task._id as string)}
              />
            <img
              src={deleteIcon} alt="delete" 
              onClick={() => deleteTask(task._id as string)}
            />
          </span>
        </span>
      )
    }
  }

  return (
    <div>
      <h2 className="task-title">Create Task</h2>
      <ul className='vars task-headings'>
        <li>Task Name</li>
        <li>Frequency</li>
        <li>Value</li>
      </ul>
      <hr />
      <ul className="vars">
        {
          taskList.map(task => 
            getTaskItem(task)
          )
        }
      </ul>

    </div>
  )
}