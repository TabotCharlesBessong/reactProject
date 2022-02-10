import React from "react";
import {Link} from 'react-router-dom'
import "./footer.css";
const Footer = () => {
  return <footer>Made with <span style={{color:'red'}} > ❤❤❤ </span>  by <Link style={{color:'white',marginLeft:'12px'}} to='https://github.com/TabotCharlesBessong' target='_blank' rel="noopener noreferrer" > Charles Bessong Tabot </Link>  </footer>;
};

export default Footer;
