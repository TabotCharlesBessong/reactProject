
import React from 'react';
import { BarChart, SearchRounded, ShoppingCartRounded} from "@material-ui/icons"
import '../App.css'
import img1 from '../food/food1 (1).jpg'
import img2 from '../food/food1 (2).jpg'
import img3 from '../food/food1 (3).jpg'
import img4 from '../food/food1 (4).jpg'

// import './App.css'

const Header = () => {
  return(
    <header>
      <img src={img1} alt=""
      className='logo'
       />
      <div className="input-box">
        <SearchRounded className='search-icon' />
        <input type="text" placeholder='search' />
      </div>
      <div className="shopping-cart">
        <ShoppingCartRounded className='cart'/>
        <div className="cart-content">
          <p> 2 </p>
        </div>
      </div>

      <div className="profile-container">
        <div className="img-box">
          <img src={img2} className='profile-pic' alt="" />
        </div>
        <h2 className="username">Charles Tabot</h2>
      </div>

      <div className="toggle-menu">
        <BarChart className='toggle-icon' />
      </div>
    </header>
    );
};

export default Header;
