import { useState,lazy,Suspense } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'
// import { Login } from './pages'
const Login = lazy(() => import ('./pages/Login'))
const Signup = lazy(() => import ('./pages/Signup'))
const Home = lazy(() => import ('./pages/Home'))
const NotFound = lazy(() => import("./pages/NotFound"));
// import './index.css'

const  App = () => {
  return (
		<Router>
			<h2 className="text-4xl text-blue-500 text-center">Hello the world</h2>
			<Suspense fallback={<p>Loading...</p>} />
			<Switch>
				<Route path={ROUTES.LOGIN} component={Login} />
				<Route path={ROUTES.SIGN_UP} component={Signup} />
				<Route exact path={ROUTES.DASHBOARD} component={Home} />
				<Route exact path='*' component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App
