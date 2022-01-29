
import React from 'react';
import {BrowserRouter as Router  ,Switch , Route , Link} from 'react-router-dom'
import {Layout , Typography , Space} from 'antd'
import {Navbar , Exchanges , Cryptocurrencies,Cryptodetails,News, Homepage} from  './components'
import './App.css'
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path='/'>
                <Homepage/>
              </Route>
              <Route  path='/exchanges'>
                <Exchanges/>
              </Route>
              <Route  path='/cryptocurrencies'>
                <Cryptocurrencies/>
              </Route>
              <Route  path='/crypto/:coinId'>
                <Cryptodetails/>
              </Route>
              <Route  path='/news'>
                <News/>
              </Route>
            </Switch>
          </div>
        </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{color:'white',textAlign:'center'}} >
          UKUJULA CRYPTO <br />
          alright reserverd
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
    </div>
    </div>

  );
};

export default App;
