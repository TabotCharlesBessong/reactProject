
import { Avatar, Button, Menu, Typography } from 'antd';
import {BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectFilled} from '@ant-design/icons'
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/cryptocurrency.png'
// import { Button , Menu } from 'antd';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className='menu-control-container'>

        </Button> */}
      </div>
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>} >
          <Link to ='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>} >
          <Link to ='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={ <MoneyCollectFilled/> } >
          <Link to ='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>} >
          <Link to ='/news'>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
