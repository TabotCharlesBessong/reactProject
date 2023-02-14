import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header ,PrivateRoutes} from "./components";
import { CreateListing, ForgotPassword, Home, Offers, Profile, Signin, Signup } from "./pages";
import {ToastContainer} from 'react-toastify'

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/offers" element={<Offers />} />
					<Route path="/profile" element={<PrivateRoutes/>} >
						<Route path="/profile" element={<Profile />} /> 
					</Route>
					<Route path="/forgot" element={<ForgotPassword />} />
					<Route path="/create-listing" element={<CreateListing />} />
					{/* <Route path="" element={<Home />} />
					<Route path="" element={<Home />} /> */}
				</Routes>
			</Router>
			<ToastContainer 
				position='bottom-center'
				autoClose={5000}
				hideProgress={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocus
				draggable
				pauseOnHover
				theme='dark'
			/>
		</>
	);
}

export default App;
