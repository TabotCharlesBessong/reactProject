
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

const Join = () => {
  const [name,setName] = useState('')
  const [room,setRoom] = useState('')
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">
          Join
        </h1>
        <div>
          <input onChange={(e)=>setName(e.target.value) } type="text" placeholder='Name' className="joinInput" />
        </div>
        <div>
          <input onChange={(e)=>setRoom(e.target.value)} type="text" placeholder='room' className="joinInput mt-20 " />
        </div>
        <Link onClick={(e) => (!name || !room) ? e.preventDefault() :  null } to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type='submit' >
              sign in
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Join