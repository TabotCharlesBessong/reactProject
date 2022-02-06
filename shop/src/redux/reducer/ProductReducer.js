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

export const selectedProductReducer = (state={},{type,payload})=>{
  switch (type){
    case ActionTypes.SELECTED_PRODUCTS:
      return {...state,...payload}
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {}
    default :
      return state
  }
}