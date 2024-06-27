import React, { useContext, useEffect, useState } from 'react';
import './notescard.css'
import UserContext from '../../Contexts/UserContext';


export default function NotesCard({data}) {

  const { note, setNote, trash, setTrash } = useContext(UserContext);
  const [daysAgo, setDaysAgo] = useState('');

  const handleDelete = () => {
    const confirmation = window.confirm('Are you sure you want to delete?');
    
    if (confirmation) {
      // Filter out the deleted note from the main data array
      const updatedNotes = note.filter(note => note.id !== data.id);
      
      // Update both the main data array and the trash array
      setNote(updatedNotes);
      setTrash([...trash, data]);
    }
  };

  useEffect(() => {

    const updatedaysAgo = () => {
    if (data && data.currentDay) {
      const currentDate = new Date();
      const creationDate = new Date(data.currentDay);
  
      const timeDifferenceInSeconds = Math.floor((currentDate - creationDate) / 1000);
  
      if (timeDifferenceInSeconds < 60) {
        setDaysAgo('just now');
      } else if (timeDifferenceInSeconds < 3600) {
        const minutesAgo = Math.floor(timeDifferenceInSeconds / 60);
        setDaysAgo(`${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`);
      } else if (timeDifferenceInSeconds < 86400) {
        const hoursAgo = Math.floor(timeDifferenceInSeconds / 3600);
        setDaysAgo(`${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`);
      } else {
        const daysAgo = Math.floor(timeDifferenceInSeconds / 86400);
        setDaysAgo(`${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`);
      }
    } else {
      setDaysAgo('Creation date unavailable');
    }
  };

  //initial Update
  updatedaysAgo();

  // setup interval to update every 30 sec
  const intervalId = setInterval(updatedaysAgo, 3000);

  return () => clearInterval(intervalId);

  }, [data]);
  
  return (
    <div className="cards" key={data.id} >
      <div className="card">
        <div className="card-body">
          <div className="title">
            <h5 className="card-title">{data.noteTitle} </h5>
            <div className="btns">
              <button className="bt">
              <i className="fa fa-eye" aria-hidden="true"></i>
              </button>
              <button className="bt">
                <i className="fa fa-trash-o" onClick={handleDelete}></i>
              </button>
            </div>
          </div>
          <p className="card-text"> {data.addNote} </p>
          <p className="time">{ daysAgo }</p>
        </div>
      </div>
    </div>
  );
}
