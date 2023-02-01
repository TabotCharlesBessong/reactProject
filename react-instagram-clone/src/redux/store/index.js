
import {combineReducers, createStore} from 'redux'
import { expenseReducer } from '../reducers/Expenses'

const reducer = combineReducers({
  expenses:expenseReducer,
})
const innitialState  = {}
const store = createStore(reducer,innitialState)

export default store