
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui fixed menu">
      <Link to={'/'}>
      <div className="ui container center">
        <h2>Fakeshop</h2>
      </div>
      </Link>
    </div>
  );
};

export default Header;
