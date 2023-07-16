import { createBrowserRouter } from "react-router-dom";
import {Home, Login, Register} from "../pages";
import App from '../App'

export const router = createBrowserRouter([
  {
    path:'/login',
    element: <Login/> 
  },
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/home',
    element:<Home/>
  },
])