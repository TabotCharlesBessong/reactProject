import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to='/'>
          <div className="header-logo">
            Xpensr
            <i class="fi-rr-credit-card" />.
          </div>
        </Link>

        <div className="header-button">
          <a
            href="https://github.com/TabotCharlesBessong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original colored" />
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
