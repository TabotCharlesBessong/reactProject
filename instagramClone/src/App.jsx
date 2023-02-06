import { useState,lazy,Suspense } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hooks/useAuthListener'
import { Login,Signup,Home,NotFound } from './pages'
import { Header } from './components'

const  App = () => {
  const {user} = useAuthListener
  return (
		<UserContext.Provider value={{ user }}>
			<Router>
			  <Header/>
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
