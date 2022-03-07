
import {createStore,applyMiddleware} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk  from 'redux-thunk'

const initialState = {
  name:'Charles',
  age:19
}

const reducer = (initialState)=>{

} 

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk)))


export default store 