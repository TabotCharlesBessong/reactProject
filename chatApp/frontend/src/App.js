import './App.css';
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChanelContainer, ChanelListContainer } from './components';

const apiKey = 'xxw8udgwaycc'
const client = StreamChat.getInstance(apiKey)

function App() {
  return (
   <h1>Hello world</h1>
  );
}

export default App;
