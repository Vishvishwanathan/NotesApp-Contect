import React from 'react'
import './home.css'
import Notes from '../../Components/Notes/Notes'
import SaveTasks from '../../Components/Tasks/SaveTasks'

export default function Home() {
  return (
    <div className='home'>
      <h3>
        Welcome <span>!</span>
      </h3>
        <Notes />
        <SaveTasks />
    </div>
  )
}
