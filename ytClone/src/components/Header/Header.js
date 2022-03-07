
import React from 'react'
import './_header.scss'
import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdNotifications , MdApps} from 'react-icons/md'
import yt from '../../images/yt.png'
import avatar from '../../images/avatar.png'


const Header = () => {
  return (
    <div className='border border-dark header' >
      <FaBars
      className='header__menu' 
      size={26} 
      />
      <img src={yt} width='24px' height='24px' alt="" className="header__logo" />
      <form action="">
        <input type="search" name="" id=""  placeholder='search' />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={avatar} alt="" />
      </div>

    </div>
  )
}

export default Header