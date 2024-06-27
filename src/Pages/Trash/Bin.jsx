import React from 'react'
import './bin.css'

export default function Bin({data}) {
  return (
    <div className="col-4" key={data.id}>
      <div className="trash-card">
        <h4 id="trash-head"> {data.noteTitle} </h4>
        <p id="trash-content"> {data.addNote} </p>
      </div>
    </div>
  );
}
