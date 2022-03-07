import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Homescreen from './pages/HomeScreen/Homescreen';
import Login from './pages/Login/Login';
import './_app.scss'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


const Layout = ({children})=>{
  const [sidebar,setSidebar] = useState(false)

  const handleToggle = ()=>{
    setSidebar(!sidebar)
  }
   return (
     <>
    <Header handleToggle={handleToggle} />
    <div className="app__container border border-info ">
      <Sidebar handleToggle={handleToggle} setSidebar={setSidebar} sidebar={sidebar}  />
      <Container fluid className='app__main border border-warning ' >
      {children}
      </Container>
    </div>
    </>
   )
}

function App() {
  
  return (
    <>
      <Router>
      <Switch>
        <Route path='/' exact >
          <Layout>
            <Homescreen/>
          </Layout>
        </Route>
        <Route path='/auth'>
          <Login/>
        
        </Route>
        <Route path='/search'  >
          <Layout>
            {/* <Homescreen/> */}
            <h1>Search Result </h1>
          </Layout>
        </Route>
        </Switch>

        <Route>
          <Redirect to='/' />
        </Route>
      </Router>
    </>
  );
}

export default App;
