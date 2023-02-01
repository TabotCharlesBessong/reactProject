import { useState,lazy,Suspense } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hooks/useAuthListener'
// import { Login } from './pages'
const Login = lazy(() => import ('./pages/Login'))
const Signup = lazy(() => import ('./pages/Signup'))
const Home = lazy(() => import ('./pages/Home'))
const NotFound = lazy(() => import("./pages/NotFound"));
// import './index.css'

const  App = () => {
  const {user} = useAuthListener
  return (
		<UserContext.Provider value={{ user }}>
			<Router>
				<Suspense fallback={<p>Loading...</p>} />
				<Switch>
					<Route path={ROUTES.LOGIN} component={Login} />
					<Route path={ROUTES.SIGN_UP} component={Signup} />
					<Route exact path={ROUTES.DASHBOARD} component={Home} />
					<Route exact path="*" component={NotFound} />
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App
