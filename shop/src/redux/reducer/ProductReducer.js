import { ActionTypes } from "../constant/ActionTypes"

const innitialState = {
  products:[]
}

export const ProductReducer = (state = innitialState,{type, payload})=>{
  switch(type){
    case ActionTypes.SET_PRODUCTS:
      return {...state, products:payload}
    default:
      return state
  }
}