

import React from 'react';
import './styles.css'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import GithubIcon from '@material-ui/icons/GitHub'
// import { Link } from '@material-ui/core';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpenser <CreditCardIcon className='icon' />
        </div>
        <div className="header-btn">
          <a href='https://github.com/TabotCharlesBessong' target="_blank" rel="noopener noreference"  >
            <GithubIcon className='icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
