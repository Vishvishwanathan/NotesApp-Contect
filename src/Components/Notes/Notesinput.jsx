import React, { useState, useEffect, useContext } from 'react';
import './notesinput.css';
import UserContext from '../../Contexts/UserContext';

export default function Notesinput() {
  const [currentTime, setCurrentTime] = useState('');
  const [noteTitle, setNoteTitle] = useState('')
  const [addNote, setAddNote] = useState('')

  const {note, setNote} = useContext(UserContext)

  useEffect(() => {
    // Set the initial value for currentTime when the component mounts
    updateCurrentTime();

    // Update the time every minute
    const intervalId = setInterval(updateCurrentTime, 30000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const updateCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    const timeString = `${hours}:${minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 })} ${ampm}`;
    setCurrentTime(timeString);
  };

  const handleSubmit = (e) => {
    const currentDay = new Date();
    const currentTime = currentDay.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  
    const newNote = {
      id: note.length + 1,  // Generate a unique id
      noteTitle,
      addNote,
      currentDay,
      currentTime
    };

    setNote((prevNotes) => [...prevNotes, newNote]);

    setNoteTitle('');
    setAddNote('')

  }

  return (
    <div className="notes-container">
      <div className="note-input">
        <h1 id="note-head">Add Note</h1>
        <div className="note">
          <input 
          type="text" 
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Title" />

          <textarea 
          value={addNote}
          onChange={(e) => setAddNote(e.target.value)}
          placeholder="Take a note..."></textarea>
          <div className="date">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <p className="current-time">Today, {currentTime}</p>
          </div>
        </div>
        <div className="btn-right">
          <button 
          onClick={handleSubmit}
          type="button">Add Note</button>
        </div>
      </div>
    </div>
  );
}
