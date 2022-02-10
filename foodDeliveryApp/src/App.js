import { AccountBalanceOutlined, Favorite, HomeRounded, NoteAdd, Settings } from '@material-ui/icons';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      {/* header sction */}
        <Header/>
      {/* main container */}
        <main>
          <div className="main-container">
          </div>

          <div className="right-menu">
          </div>
        </main>
      {/* bottom container */}
      <div className="bottom-menu">
        <ul id="menu">
          <Menu link={'#'} icon = {<HomeRounded/>} text={'home'} />
          <Menu link={'#'} icon = {<AccountBalanceOutlined/>} />
          <Menu link={'#'} icon = {<Favorite/>} />
          <Menu link={'#'} icon = {<NoteAdd/>} />
          <Menu link={'#'} icon = {<Settings/>} />
        <div className="indicatio">

        </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
