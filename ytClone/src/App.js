import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Homescreen from './pages/HomeScreen/Homescreen';
import Login from './pages/Login/Login';
import './_app.scss'

function App() {
  const [sidebar,setSidebar] = useState(false)

  const handleToggle = ()=>{
    setSidebar(!sidebar)
  }
  return (
    <>
      {/* <Header handleToggle={handleToggle} />
      <div className="app__container border border-info ">
        <Sidebar handleToggle={handleToggle} setSidebar={setSidebar} sidebar={sidebar}  />
        <Container fluid className='app__main border border-warning ' >
          <Homescreen/>
        </Container>
      </div> */}
      <Login/>
    </>
  );
}

export default App;
