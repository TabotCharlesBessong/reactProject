
import {combineReducers} from 'redux'
import { ProductReducer } from './ProductReducer'

export const reducers = combineReducers({
  allProducts:ProductReducer,
})