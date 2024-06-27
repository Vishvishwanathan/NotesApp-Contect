import React, { useContext } from 'react'
import './notes.css'
import UserContext from '../../Contexts/UserContext';
import NotesCard from './Notescard';

export default function Notes() {

  const { note } = useContext(UserContext)

  return (
    <div className="card-head">
      <div className="my-notes">
        <i className="fa fa-file-text" aria-hidden="true"></i>
        <h3>My Notes</h3>
      </div>
      <div className="card-container">
        {
          note.map((data, i) => {
            return <NotesCard key={i} data = { data } />
          })
        }
      </div>
    </div>
  );
}
