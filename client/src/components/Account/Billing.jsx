import React, { useState } from "react";

const Billing = () => {
	const [nameOnCard, setNameOnCard] = useState("Tom Cook");
	const [shippingAddress, setShippingAddress] = useState({
		street: "123 Sesame St.",
		apt: "",
		city: "Las Vegas",
		state: "NV",
		zipCode: "89107",
	});

	const [billingAddress, setBillingAddress] = useState({
		street: "123 Sesame St.",
		apt: "",
		city: "Las Vegas",
		state: "NV",
		zipCode: "89107",
	});

	const [cardOnFile, setCardOnFile] = useState({
		cardType: "",
		cardNumber: "",
		expirationDate: "",
	});

	const maskCreditCard = (cardNumber) => {
		// Check if the card number is valid and has at least 16 digits
		if (cardNumber && cardNumber.length >= 16) {
			const maskedPart = cardNumber.slice(0, 12).replace(/\d/g, "*"); // Mask the first 12 digits
			const lastFourDigits = cardNumber.slice(-4); // Get the last four digits
			return `${maskedPart} ${lastFourDigits}`;
		} else {
			return cardNumber; // Return the original card number if it doesn't have enough digits
		}
	};

	const [isNameOnCardEditing, setIsNameOnCardEditing] = useState(false);
	const [isShippingAddressEditing, setIsShippingAddressEditing] =
		useState(false);
	const [isBillingAddressEditing, setIsBillingAddressEditing] = useState(false);
	const [isCardOnFileEditing, setIsCardOnFileEditing] = useState(false);

	const handleNameOnCardUpdate = () => {
		if (isNameOnCardEditing) {
			// Handle save logic here (e.g., update the value in the database)
			setIsNameOnCardEditing(false); // Disable editing mode
		} else {
			setIsNameOnCardEditing(true); // Enable editing mode
		}
	};

	const handleShippingAddressUpdate = () => {
		setIsShippingAddressEditing(!isShippingAddressEditing);
	};

	const handleBillingAddressUpdate = () => {
		setIsBillingAddressEditing(!isBillingAddressEditing);
	};

	const handleCardOnFileUpdate = () => {
		setIsCardOnFileEditing(!isCardOnFileEditing);
	};

	const cardTypes = ["MasterCard", "Visa", "American Express"];

	return (
		<div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
			<div>
				<h2 className="text-xl font-semibold leading-7 text-gray-900">
					Billing
				</h2>
				<p className="mt-1 text-sm leading-6 text-gray-500">
					This information will{" "}
					<span className="font-medium text-black underline">not</span> be
					displayed publicly.
				</p>

				{/* Name on Card */}
				<dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
					<div className="pt-6 sm:flex">
						<dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
							Name on Card
						</dt>
						<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
							{isNameOnCardEditing ? (
								<input
									type="text"
									value={nameOnCard}
									onChange={(e) => setNameOnCard(e.target.value)}
									className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
								/>
							) : (
								<div className="text-gray-900">{nameOnCard}</div>
							)}
							<button
								id="updateNameOnCard"
								type="button"
								onClick={handleNameOnCardUpdate}
								className="font-semibold text-indigo-600 hover:text-indigo-500">
								{isNameOnCardEditing ? "Save" : "Update"}
							</button>
						</dd>
					</div>

					{/* Shipping Address */}
					<div className="pt-6 sm:flex">
						<dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
							Shipping Address
						</dt>
						<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
							{isShippingAddressEditing ? (
								<form>
									<div className="mb-2">
										<label
											htmlFor="street"
											className="block text-sm font-medium text-gray-700">
											Street
										</label>
										<input
											type="text"
											id="street"
											value={shippingAddress.street}
											onChange={(e) =>
												setShippingAddress({
													...shippingAddress,
													street: e.target.value,
												})
											}
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
										/>
									</div>
									<div className="mb-2">
										<label
											htmlFor="apt"
											className="block text-sm font-medium text-gray-700">
											Apt (if applicable)
										</label>
										<input
											type="text"
											id="apt"
											value={shippingAddress.apt}
											onChange={(e) =>
												setShippingAddress({
													...shippingAddress,
													apt: e.target.value,
												})
											}
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
										/>
									</div>
									<div className="mb-2">
										<label
											htmlFor="city"
											className="block text-sm font-medium text-gray-700">
											City
										</label>
										<input
											type="text"
											id="city"
											value={shippingAddress.city}
											onChange={(e) =>
												setShippingAddress({
													...shippingAddress,
													city: e.target.value,
												})
											}
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
										/>
									</div>
									<div className="mb-2">
										<label
											htmlFor="state"
											className="block text-sm font-medium text-gray-700">
											State
										</label>
										<input
											type="text"
											id="state"
											value={shippingAddress.state}
											onChange={(e) =>
												setShippingAddress({
													...shippingAddress,
													state: e.target.value,
												})
											}
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
										/>
									</div>
									<div className="mb-2">
										<label
											htmlFor="zipCode"
											className="block text-sm font-medium text-gray-700">
											Zip Code
										</label>
										<input
											type="text"
											id="zipCode"
											value={shippingAddress.zipCode}
											onChange={(e) =>
												setShippingAddress({
													...shippingAddress,
													zipCode: e.target.value,
												})
											}
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
										/>
									</div>
								</form>
							) : (
								<div className="text-gray-900">{`${shippingAddress.street}${
									shippingAddress.apt ? `, ${shippingAddress.apt}` : ""
								}, ${shippingAddress.city}, ${shippingAddress.state}, ${
									shippingAddress.zipCode
								}`}</div>
							)}
							<button
								id="updateShippingAddress"
								type="button"
								onClick={handleShippingAddressUpdate}
								className="font-semibold text-indigo-600 hover:text-indigo-500">
								{isShippingAddressEditing ? "Save" : "Update"}
							</button>
						</dd>
					</div>

					{/* Billing Address */}
					<div className="pt-6 sm:flex">
						<dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
							Billing Address
						</dt>
						<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
							{isBillingAddressEditing ? (
								<form>
									<div className="mb-2">
										<label
											htmlFor="billingStreet"
											className="block text-sm font-medium text-gray-700">
											Street
										</label>
										<input
											type="text"
											id="billingStreet"
											value={billingAddress.street}
											onChange={(e) =>
												setBillingAddress({
													...billingAddress,
													street: e.target.value,
												})
											}
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
										/>
									</div>
									<div className="mb-2">
										<label
											htmlFor="billingApt"
											className="block text-sm font-medium text-gray-700">
											Apt (if applicable)
										</label>
										<input
											type="text"
											id="billingApt"
											value={billingAddress.apt}
											onChange={(e) =>
												setBillingAddress({
													...billingAddress,
													apt: e.target.value,
												})
											}
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
										/>
									</div>
									<div className="mb-2">
										<label
											htmlFor="billingCity"
											className="block text-sm font-medium text-gray-700">
											City
										</label>
										<input
											type="text"
											id="billingCity"
											value={billingAddress.city}
											onChange={(e) =>
												setBillingAddress({
													...billingAddress,
													city: e.target.value,
												})
											}
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
										/>
									</div>
									<div className="mb-2">
										<label
											htmlFor="billingState"
											className="block text-sm font-medium text-gray-700">
											State
										</label>
										<input
											type="text"
											id="billingState"
											value={billingAddress.state}
											onChange={(e) =>
												setBillingAddress({
													...billingAddress,
													state: e.target.value,
												})
											}
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
										/>
									</div>
									<div className="mb-2">
										<label
											htmlFor="billingZipCode"
											className="block text-sm font-medium text-gray-700">
											Zip Code
										</label>
										<input
											type="text"
											id="billingZipCode"
											value={billingAddress.zipCode}
											onChange={(e) =>
												setBillingAddress({
													...billingAddress,
													zipCode: e.target.value,
												})
											}
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
										/>
									</div>
								</form>
							) : (
								<div className="text-gray-900">{`${billingAddress.street}${
									billingAddress.apt ? `, ${billingAddress.apt}` : ""
								}, ${billingAddress.city}, ${billingAddress.state}, ${
									billingAddress.zipCode
								}`}</div>
							)}
							<button
								id="updateBillingAddress"
								type="button"
								onClick={handleBillingAddressUpdate}
								className="font-semibold text-indigo-600 hover:text-indigo-500">
								{isBillingAddressEditing ? "Save" : "Update"}
							</button>
						</dd>
					</div>

					{/* Card on File */}
					<div className="pt-6 sm:flex">
						<dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
							Card on File
						</dt>
						<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
							{isCardOnFileEditing ? (
								<form>
									<div className="mb-2">
										<label
											htmlFor="cardType"
											className="block text-sm font-medium text-gray-700">
											Card Type
										</label>
										<select
											id="cardType"
											value={cardOnFile.cardType}
											onChange={(e) =>
												setCardOnFile({
													...cardOnFile,
													cardType: e.target.value,
												})
											}
											className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
											{cardTypes.map((type) => (
												<option key={type} value={type}>
													{type}
												</option>
											))}
										</select>
									</div>
									<div className="mb-2">
										<label
											htmlFor="cardNumber"
											className="block text-sm font-medium text-gray-700">
											Card Number
										</label>
										<input
											type="text"
											id="cardNumber"
											value={maskCreditCard(cardOnFile.cardNumber)} // Mask the card number
											onChange={(e) =>
												setCardOnFile({
													...cardOnFile,
													cardNumber: e.target.value,
												})
											}
											className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
									<div className="mb-2">
										<label
											htmlFor="expirationDate"
											className="block text-sm font-medium text-gray-700">
											Expiration Date
										</label>
										<input
											type="text"
											id="expirationDate"
											value={cardOnFile.expirationDate}
											onChange={(e) =>
												setCardOnFile({
													...cardOnFile,
													expirationDate: e.target.value,
												})
											}
											className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
								</form>
							) : (
								<div className="flex align-center">
									<div>{`${cardOnFile.cardType}`}</div>
									<p className="mx-4">-</p>
									<div className="text-gray-900">
										{maskCreditCard(cardOnFile.cardNumber)}
									</div>
								</div>
							)}
							<button
								id="updateCardOnFile"
								type="button"
								onClick={handleCardOnFileUpdate}
								className="font-semibold text-indigo-600 hover:text-indigo-500">
								{isCardOnFileEditing ? "Save" : "Update"}
							</button>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};

export default Billing;
