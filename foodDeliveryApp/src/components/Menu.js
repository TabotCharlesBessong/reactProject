
import React from 'react';
import '../App.css'

const Menu = ({link,icon , text}) => {
  return (
    <li>
      <a href={link}>
        <span className='icon' >
          {icon}
        </span>
      </a>
      <h5>
        {text}
      </h5>
    </li>
  );
};

export default Menu;
