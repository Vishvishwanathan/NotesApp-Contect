import './bin.css'
import React, { useContext } from 'react'
import UserContext from '../../Contexts/UserContext'
import Bin from './Bin'

export default function Trash() {

    const { trash } = useContext(UserContext)

  return (
    <div className="trash">
      <div className="bin">
        <div className="row">
            {
                trash.map((data, i) => {
                    return <Bin key={i} data = {data} />
                })
            }
        </div>
      </div>
    </div>
  );
}
