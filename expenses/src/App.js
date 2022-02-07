// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddExpense from './pages/AddExpense/AddExpense';
// import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <Router>
        <Header/>
        <Switch>
        <Route exact path='/' >
          <Home/>
        </Route>
        <Route  path='/add' >
          <AddExpense/>
        </Route>
        </Switch>
        <div className="">Footer</div>
      </Router>

    </div>
  );
}

export default App;
