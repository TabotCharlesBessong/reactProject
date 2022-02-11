
import React from 'react';
import '../App.css'

const Menu = ({link,icon  , isHome}) => {
  return (
    <li className={isHome ? 'active':'' } >
      <a href={link}>
        <span className='icon' >
          {icon}
        </span>
      </a>
      <h5>
        {/* {text} */}
      </h5>
    </li>
  );
};

export default Menu;
