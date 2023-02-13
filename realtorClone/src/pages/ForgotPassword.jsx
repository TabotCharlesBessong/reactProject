// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import {OAuth} from "../components";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from 'firebase/auth'
import { toast } from "react-toastify";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");

	const handleChange =(e) => {
		setEmail(e.target.value);
	}

	const handleSubmit = async (e) => {
    e.preventDefault()
		try {
			await sendPasswordResetEmail(auth,email)
			toast.success("Reset email sent")
		} catch (error) {
			toast.error("Could not send reset email")
		}
	}

	
	return (
		<section>
			<h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
			<div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
				<div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
					<img
						src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
						alt="key"
						className="w-full rounded-2xl"
					/>
				</div>
				<div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
					<form onSubmit={handleSubmit}>
						<input
							type="email"
							id="email"
							value={email}
							onChange={handleChange}
							placeholder="Email address"
							className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
						/>

						<div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
							<p className="mb-6">
								Don't have a account?
								<Link
									to="/signup"
									className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
								>
									Register
								</Link>
							</p>
							<p>
								<Link
									to="/signin"
									className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
								>
									Sign in instead
								</Link>
							</p>
						</div>
						<button
							className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
							type="submit"
						>
							Send reset password
						</button>
						<div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
							<p className="text-center font-semibold mx-4">OR</p>
						</div>
						<OAuth />
					</form>
				</div>
			</div>
		</section>
	);
}

export default ForgotPassword