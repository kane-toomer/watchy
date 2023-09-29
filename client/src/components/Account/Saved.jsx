import React, { useState } from "react";

const Saved = () => {
	// Define the products array here
	const products = [
		{
			id: 1,
			name: "Basic Tee 8-Pack",
			price: "$256",
			description:
				"Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
			options: "8 colors",
			imageSrc:
				"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
			imageAlt:
				"Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
		},
		{
			id: 2,
			name: "Basic Tee",
			price: "$32",
			description:
				"Look like a visionary CEO and wear the same black t-shirt every day.",
			options: "Black",
			imageSrc:
				"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
			imageAlt: "Front of plain black t-shirt.",
		},
		// ... (other products)
	];

	const [savedWatches, setSavedWatches] = useState(products);

	const removeWatch = (id) => {
		// Filter out the watch item with the specified id
		const updatedWatches = savedWatches.filter((watch) => watch.id !== id);
		setSavedWatches(updatedWatches);
	};

	return (
		<div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
			<div>
				<h2 className="text-xl font-semibold leading-7 text-gray-900">
					Saved Watches
				</h2>
				<p className="mt-1 text-sm leading-6 text-gray-500">
					Saving a watch does not lock-in the price shown at save time.
				</p>

				<dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
					<table className="mt-4 w-full text-gray-500 sm:mt-6">
						<tbody>
							{savedWatches.map((product) => (
								<tr key={product.id}>
									<td className="py-6 pr-8">
										<div className="flex items-center">
											<img
												src={product.imageSrc}
												alt={product.imageAlt}
												className="mr-6 h-44 w-44 rounded object-cover object-center"
											/>
											<div className="flex flex-col">
												<p className="font-medium text-gray-900">
													{product.name}
												</p>
												<p className="font-medium text-gray-600">
													{product.price}
												</p>
											</div>
										</div>
									</td>

									<td className="whitespace-nowrap py-6 text-right font-medium">
										<button
											className="text-indigo-600"
											onClick={() => removeWatch(product.id)}>
											Remove
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</dl>
			</div>
		</div>
	);
};

export default Saved;
