
import React from 'react'
import './_video.scss'
import {AiFillEye} from 'react-icons/ai'
import agent1  from '../../images/agents3.jfif'
import flat2  from '../../images/family3.jfif'

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src={agent1} alt="" />
        <span className='video__duration' > 09:32 </span>
      </div>
      <div className="video__title">
        <h1>Create react app under 10 minutes</h1>
      </div>
      <div className="video__details">
        <span>
          <AiFillEye/> 4m views...
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img src={flat2} alt="" />
        Avulion
      </div>
    </div>
  )
}

export default Video