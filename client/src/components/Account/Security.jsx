import React, { useState } from "react";

const Security = () => {
	const [isPasswordEditing, setIsPasswordEditing] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");

	const handlePasswordUpdate = () => {
		if (isPasswordEditing) {
			if (newPassword !== confirmPassword) {
				setMessage("Passwords do not match.");
				return;
			}

			// Send a request to your backend to update the password here
			// You should include the current password, newPassword, and confirmPassword in the request
			// Handle success and error cases accordingly
			// Clear newPassword and confirmPassword fields on success
			// Display error message on failure
			setNewPassword("");
			setConfirmPassword("");
		}
		setIsPasswordEditing(!isPasswordEditing);
	};

	return (
		<div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
			<div>
				<h2 className="text-xl font-semibold leading-7 text-gray-900">
					Security
				</h2>
				<p className="mt-1 text-sm leading-6 text-gray-500">
					This information will{" "}
					<span className="font-medium text-black underline">not</span> be
					displayed publicly.
				</p>

				<dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
					<div className="pt-6 sm:flex">
						<dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
							Password
						</dt>
						{isPasswordEditing ? (
							<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
								<input
									type="password"
									className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
									placeholder="New Password"
									value={newPassword}
									onChange={(e) => setNewPassword(e.target.value)}
								/>
								<input
									type="password"
									className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
								<button
									type="button"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
									onClick={handlePasswordUpdate}>
									Save
								</button>
								{message && <p className="text-red-500 text-sm">{message}</p>}
							</dd>
						) : (
							<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
								<div className="text-gray-900 font-bold">Password Hidden</div>
								<button
									type="button"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
									onClick={handlePasswordUpdate}>
									Update
								</button>
							</dd>
						)}
					</div>
				</dl>
			</div>
		</div>
	);
};

export default Security;
