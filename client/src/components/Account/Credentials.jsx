import React, { useState } from "react";

const Credentials = () => {
	const [isNameEditing, setIsNameEditing] = useState(false);
	const [isEmailEditing, setIsEmailEditing] = useState(false);
	const [newName, setNewName] = useState("Tom Cook");
	const [newEmail, setNewEmail] = useState("tom.cook@example.com");

	const handleNameUpdate = () => {
		if (isNameEditing) {
			// Save the new name to your backend here
		}
		setIsNameEditing(!isNameEditing);
	};

	const handleEmailUpdate = () => {
		if (isEmailEditing) {
			// Save the new email to your backend here
		}
		setIsEmailEditing(!isEmailEditing);
	};

	return (
		<div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
			<div>
				<h2 className="text-xl font-semibold leading-7 text-gray-900">
					Profile
				</h2>
				<p className="mt-1 text-sm leading-6 text-gray-500">
					This information will{" "}
					<span className="font-medium text-black underline">not</span> be
					displayed publicly.
				</p>

				<dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
					<div className="pt-6 sm:flex">
						<dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
							Full name
						</dt>
						{isNameEditing ? (
							<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
								<input
									type="text"
									className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
									value={newName}
									onChange={(e) => setNewName(e.target.value)}
								/>
								<button
									type="button"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
									onClick={handleNameUpdate}>
									Save
								</button>
							</dd>
						) : (
							<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
								<div className="text-gray-900">{newName}</div>
								<button
									id="updateName"
									type="button"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
									onClick={handleNameUpdate}>
									Update
								</button>
							</dd>
						)}
					</div>
					<div className="pt-6 sm:flex">
						<dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
							Email address
						</dt>
						{isEmailEditing ? (
							<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
								<input
									type="email"
									className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
									value={newEmail}
									onChange={(e) => setNewEmail(e.target.value)}
								/>
								<button
									type="button"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
									onClick={handleEmailUpdate}>
									Save
								</button>
							</dd>
						) : (
							<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
								<div className="text-gray-900">{newEmail}</div>
								<button
									id="updateEmail"
									type="button"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
									onClick={handleEmailUpdate}>
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

export default Credentials;
