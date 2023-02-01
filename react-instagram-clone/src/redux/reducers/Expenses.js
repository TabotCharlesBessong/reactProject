import { ADD_EXPENSE } from "../actionTypes/Expenses"

const innitialState = {
  expenseList : [],
}

export const expenseReducer = (state = innitialState , action)=>{
  switch (action.type){
    case ADD_EXPENSE:{
      return {
        ...state,
        expenseList:[...state.expenseList,action.data],
      }
    }
    default :
     return state
  }
}