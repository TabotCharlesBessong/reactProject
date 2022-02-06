
import {combineReducers} from 'redux'
import { ProductReducer ,selectedProductReducer} from './ProductReducer'

export const reducers = combineReducers({
  allProducts:ProductReducer,
  product:selectedProductReducer
})