import React, { useContext, useState } from 'react'
import './taskinput.css'
import UserContext from '../../Contexts/UserContext';

export default function Taskinput() {
    const [taskTitle, setTaskTitle] = useState('');
    const [addTask, setAddTask] = useState('')
    const [taskDate, setTaskDate] = useState('');

    const {task, setTask} = useContext(UserContext);

    const handleSubmit = (e) => {

        const newTask = {
            id: task.length + 1,
            taskTitle,
            addTask,
            taskDate
        }

        setTask((prevTasks) => [...prevTasks, newTask]);
        setTaskTitle('');
        setAddTask('');
        setTaskDate('');
    }

  return (
    <div className="task-container">
      <div className="task-input">
        <h1 id="task-head">Add a Task</h1>
        <div className="task-in">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Title"
          />

          <textarea
            value={addTask}
            onChange={(e) => setAddTask(e.target.value)}
            placeholder="Add a task..."
          ></textarea>
          <div className="date">
          <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
            <p className="current-time">Date/Time</p>
          </div>
        </div>
        <div className="btn-right">
          <button onClick={handleSubmit} type="button">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
