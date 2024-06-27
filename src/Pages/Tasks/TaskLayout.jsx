import React from 'react'
import Taskinput from '../../Components/Tasks/Taskinput'
import SaveTasks from '../../Components/Tasks/SaveTasks'
import './tasklayout.css'

export default function TaskLayout() {
  return (
    <div className='task-layout'>
      <Taskinput />
      <SaveTasks />
    </div>
  )
}
