import { useState,lazy,Suspense } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hooks/useAuthListener'
import { Login,Signup,Home,NotFound } from './pages'
// const Login = lazy(() => import ('./pages/Login'))
// const Signup = lazy(() => import ('./pages/Signup'))
// const Home = lazy(() => import ('./pages/Home'))
// const NotFound = lazy(() => import("./pages/NotFound"));
// import './index.css'

const  App = () => {
  const {user} = useAuthListener
  return (
		<UserContext.Provider value={{ user }}>
			<Router>
				{/* <Suspense fallback={<p>Loading...</p>} /> */}
				<Routes>
					<Route path={ROUTES.LOGIN} element={<Login/>} />
					<Route path={ROUTES.SIGN_UP} element={<Signup/>} />
					<Route exact path={ROUTES.DASHBOARD} element={<Home/>} />
					<Route exact path="*" element={<NotFound/>} />
				</Routes>
			</Router>
		</UserContext.Provider>
	);
}

export default App
