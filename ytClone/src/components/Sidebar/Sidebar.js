
import React from 'react'
import './_sidebar.scss'
import {MdSubscriptions,MdExitToApp,MdThumbUp,MdHistory,MdLibraryBooks,MdMore,MdSentimentDissatisfied,MdHome} from 'react-icons/md'

const Sidebar = () => {
  return (
    <nav className='border border-danger  sidebar' >
      <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23}/>
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23}/>
        <span>Liked videos</span>
      </li>
      <li>
        <MdHistory size={23}/>
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23}/>
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23}/>
        <span>I dont Know</span>
      </li>
      <hr />
      <li>
        <MdExitToApp size={23}/>
        <span>Log out</span>
      </li>
      {/* <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li> */}
     <hr />
    </nav>
  )
}

export default Sidebar