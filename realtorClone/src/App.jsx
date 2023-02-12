import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { ForgotPassword, Home, Offers, Profile, Signin, Signup } from "./pages";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/offers" element={<Offers />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/forgot" element={<ForgotPassword />} />
				{/* <Route path="" element={<Home />} />
				<Route path="" element={<Home />} />
				<Route path="" element={<Home />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
