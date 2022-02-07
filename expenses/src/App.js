// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
// import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <Header/>
        <Home/>
      <div className="">Footer</div>
    </div>
  );
}

export default App;
