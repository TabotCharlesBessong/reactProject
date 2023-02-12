import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { OAuth } from "../components";

const Signup = () => {
	const [formData, setFormData] = useState({
    name:"",
		email: "",
		password: "",
    cpassword:""
	});
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};
	return (
		<section>
			<h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
			<div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
				<div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 lg:mr-20">
					<img
						src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
						alt="key"
						className="w-full rounded-3xl"
					/>
				</div>
				<div className="w-full md:w-[67%] lg:w-[40%]">
					<form>
						<input
							className="w-full px-4 py-2 text-xl text-gray-700 bg-white mb-5 rounded-lg border-gray-300 transition ease-in-out text-center"
							type="text"
							id="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Full Name"
						/>
						<input
							className="w-full px-4 py-2 text-xl text-gray-700 bg-white mb-5 rounded-lg border-gray-300 transition ease-in-out text-center"
							type="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Email address"
						/>
						<div className="relative">
							<input
								className="w-full px-4 py-2 text-xl text-gray-700 bg-white mb-2 rounded-lg border-gray-300 transition ease-in-out text-center"
								type={showPassword ? "text" : "password"}
								id="password"
								value={formData.password}
								onChange={handleChange}
								placeholder="password"
							/>
							<div
								onClick={() => setShowPassword(!showPassword)}
								className="absolute top-3 right-3 cursor-pointer"
							>
								{showPassword ? (
									<AiFillEye fontSize={24} />
								) : (
									<AiFillEyeInvisible fontSize={24} />
								)}
							</div>
						</div>

						<div className="relative">
							<input
								className="w-full px-4 py-2 text-xl text-gray-700 bg-white mb-2 rounded-lg border-gray-300 transition ease-in-out text-center"
								type={showPassword ? "text" : "password"}
								id="cpassword"
								value={formData.cpassword}
								onChange={handleChange}
								placeholder="confirm password"
							/>
							<div
								onClick={() => setShowPassword(!showPassword)}
								className="absolute top-3 right-3 cursor-pointer"
							>
								{showPassword ? (
									<AiFillEye fontSize={24} />
								) : (
									<AiFillEyeInvisible fontSize={24} />
								)}
							</div>
						</div>
						<div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
							<p className="mb-6">
								Already have a account?
								<Link
									to="/signin"
									className="text-red-600 hover:text-red-900 transition duration-200 ease-in-out ml-1"
								>
									Login
								</Link>
							</p>
							<p>
								<Link
									to="/forgot"
									className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
								>
									Forgot password?
								</Link>
							</p>
						</div>
						<button
							className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
							type="submit"
						>
							Sign up
						</button>
						<div className="flex items-center  my-4 before:border-t-4 before:flex-1 before:border-gray-300 after:border-t-4 after:flex-1 after:border-gray-300">
							<p className="text-center font-semibold mx-4">OR</p>
						</div>
						<OAuth />
					</form>
				</div>
			</div>
		</section>
	);
};

export default Signup;
