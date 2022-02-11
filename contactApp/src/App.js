// import logo from './logo.svg';
import './App.css';
import {ToastContainer} from "react-toastify"
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    {/* add contact route / edit /:id /delete */}
    <ToastContainer/>
    <Navbar/>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route  path='/add'>
        <h1>I am add components</h1>
      </Route>
      <Route  path='/edit/:id'>
        <h1>I am edit components</h1>
      </Route>
    </Switch>
    
    </div>
  );
}

export default App;
