import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		agreeCheck: false,
	});
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		const newValue = type === "checkbox" ? checked : value;
		setFormData({
			...formData,
			[name]: newValue,
		});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstName: formData.firstName,
					lastName: formData.lastName,
					email: formData.email,
					password: formData.password,
				}),
			});

			if (response.ok) {
				// Registration successful
				setSuccessMessage("Registration successful! Redirecting...");

				// You can redirect to the login page or any other page here
				setTimeout(() => {
					window.location.href = "/";
				}, 2000);
			} else {
				// Registration failed
				const errorData = await response.json();
				setErrorMessage(errorData.message || "Registration failed");
			}
		} catch (error) {
			console.error("Error during registration:", error);
			setErrorMessage("An error occurred. Please try again.");
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<a
						href="/"
						className="flex justify-center items-center text-indigo-600 font-bold text-2xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8 mr-2">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Watchy
					</a>
					<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Create Account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
					<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
						<form className="space-y-6" onSubmit={handleFormSubmit}>
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>
									<label
										htmlFor="first-name"
										className="block text-sm font-semibold leading-6 text-gray-900">
										First name
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="firstName"
											id="first-name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											onChange={handleInputChange}
											value={formData.firstName}
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="last-name"
										className="block text-sm font-semibold leading-6 text-gray-900">
										Last name
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="lastName"
											id="last-name"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											onChange={handleInputChange}
											value={formData.lastName}
										/>
									</div>
								</div>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900">
									Email address
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										onChange={handleInputChange}
										value={formData.email}
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										onChange={handleInputChange}
										value={formData.password}
									/>
								</div>
							</div>

							<div className="">
								<div className="flex items-start">
									<input
										id="agree-check"
										name="agreeCheck"
										type="checkbox"
										required
										className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
										onChange={handleInputChange}
										checked={formData.agreeCheck}
									/>
									<label
										htmlFor="agree-check"
										className="ml-3 block text-sm text-gray-900">
										By registering, I agree to the{" "}
										<span className="underline text-blue-500">
											Terms & Conditions
										</span>{" "}
										and{" "}
										<span className="underline text-blue-500">
											Privacy Policy
										</span>{" "}
										of Watchy.
									</label>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
									Sign up
								</button>
							</div>

							{/* Success Message */}
							{successMessage && (
								<div
									className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded  text-center"
									role="alert">
									{successMessage}
								</div>
							)}

							{/* Error Message */}
							{errorMessage && (
								<div
									className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded  text-center"
									role="alert">
									{errorMessage}
								</div>
							)}
						</form>
					</div>

					<div>
						<div className="relative mt-10">
							<div
								className="absolute inset-0 flex items-center"
								aria-hidden="true">
								<div className="w-full border-t border-gray-200" />
							</div>
							<div className="relative flex justify-center text-sm font-medium leading-6">
								<span className="bg-white px-6 text-gray-900">
									Or continue with
								</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-2 gap-4">
							<a
								href="#"
								className="flex w-full items-center justify-center gap-3 rounded-md bg-white border-0 shadow-sm ring-1 ring-inset ring-gray-300 px-3 py-1.5 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="20"
									height="20"
									viewBox="0 0 48 48">
									<path
										fill="#fbc02d"
										d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
									<path
										fill="#e53935"
										d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
									<path
										fill="#4caf50"
										d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
									<path
										fill="#1565c0"
										d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
								</svg>
								<span className="text-sm font-semibold leading-6">Google</span>
							</a>

							<a
								href="#"
								className="flex w-full items-center justify-center gap-3 rounded-md bg-white border-0 shadow-sm ring-1 ring-inset ring-gray-300 px-3 py-1.5 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="20"
									height="20"
									viewBox="0 0 50 50">
									<path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
								</svg>
								<span className="text-sm font-semibold leading-6">Apple</span>
							</a>
						</div>
					</div>
				</div>

				<p className="mt-10 text-center text-sm text-gray-500">
					Already have an account?{" "}
					<a
						href="/login"
						className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
						Sign In
					</a>
				</p>
			</div>
		</>
	);
};

export default Register;
