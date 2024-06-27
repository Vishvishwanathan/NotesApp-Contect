import React, { useContext } from 'react'
import './savetasks.css'
import UserContext from '../../Contexts/UserContext';
import TaskCard from './TaskCard';



export default function SaveTasks() {

  const { task } = useContext(UserContext)
  return (

      <div className="task">
        <div className="my-tasks">
          <div className="task-head">
            <i class="fa fa-check-circle-o fa-2x" aria-hidden="true"></i>
            <h5>My Tasks</h5>
          </div>
        </div>

        <div className="tasks">
            {
              task.map((taskdata, i) => {
                return <TaskCard key={i} data={taskdata} />
              })
            }
        </div>

      </div>
  );
}
