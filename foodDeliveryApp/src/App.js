import { AccountBalanceOutlined, Favorite, HomeRounded, NoteAdd, Settings } from '@material-ui/icons';
import { useEffect } from 'react';
import './App.css';
import BannerName from './components/BannerName';
import Header from './components/Header';
import Menu from './components/Menu';
import img1 from './food/avulionAgents (1).jpg'
import img2 from './food/avulionAgents (6).jpg'
// import img1 from '../food/avulionAgents (1).jpg'
// import img1 from '../food/avulionAgents (1).jpg'



function App() {

  useEffect(()=>{
    const menuLi = document.querySelectorAll('#menu li')
    // console.log(menuLi);
    const setMenuActive = ()=>{
      // console.log('hi');
      menuLi.forEach((e) => e.classList.remove('active'))
      this.classList.add('active')
    }

    menuLi.forEach((n) => n.addEventListener('click', setMenuActive) )
  },[])

  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      {/* header sction */}
        <Header/>
      {/* main container */}
        <main>
          <div className="main-container">
            {/* banner */}
            <div className="banner">
              <BannerName name={"Charles"} discount={30} link={'#'}  />
              <img src={img1} alt="" className='delivery-pic' />
            </div>
          </div>

          <div className="right-menu">
          </div>
        </main>
      {/* bottom container */}
      <div className="bottom-menu">
        <ul id="menu">
          <Menu link={'#'} icon = {<HomeRounded/>}  isHome />
          <Menu link={'#'} icon = {<AccountBalanceOutlined/>} />
          <Menu link={'#'} icon = {<Favorite/>} />
          <Menu link={'#'} icon = {<NoteAdd/>} />
          <Menu link={'#'} icon = {<Settings/>} />
        <div className="indicator">

        </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
