import React from 'react'
import Notesinput from '../../Components/Notes/Notesinput'
import Notes from '../../Components/Notes/Notes'
import './notelayout.css'

export default function NoteLayout() {
  return (
    <div className='note-layout'>
      <Notesinput />
      <Notes />
    </div>
  )
}
