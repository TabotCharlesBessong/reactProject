import { createBrowserRouter } from "react-router-dom";
import {Login} from "../pages";
import App from '../App'

export const router = createBrowserRouter([
  {
    path:'/login',
    element: <Login/> 
  },
  {
    path:'/',
    element:<App/>
  }
])