import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	UserIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const currencies = ["USD", "CAD", "AUD", "EUR", "GBP"];
const navigation = {
	pages: [
		{ name: "Buy", href: "/shop" },
		{ name: "Sell", href: "/sell" },
		{ name: "FAQ", href: "/faq" },
		{ name: "Buyer Protection", href: "/buyer-protection" },
	],
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false); // Set this based on your authentication logic

	// Function to handle user logout (if needed)
	const handleLogout = () => {
		// Perform logout logic here
		setIsAuthenticated(false);
		setMobileMenuOpen(false); // Close mobile menu after logout
	};

	return (
		<div className="bg-white">
			{/* Mobile menu */}
			<Transition.Root show={mobileMenuOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-40 lg:hidden"
					onClose={setMobileMenuOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="relative flex flex-col h-full">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full">
							<div className="absolute inset-0 bg-white shadow-xl">
								<div className="flex items-center justify-between px-4 pt-5">
									<button
										type="button"
										className="-m-2 p-2 rounded-md text-gray-400"
										onClick={() => setMobileMenuOpen(false)}>
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>

								{/* Links */}
								<div className="pt-6 pb-2 space-y-6">
									{navigation.pages.map((page) => (
										<div key={page.name} className="flow-root">
											<a
												href={page.href}
												className="-m-2 p-2 block font-medium text-gray-900">
												{page.name}
											</a>
										</div>
									))}
								</div>

								{/* Authentication Links */}
								<div className="border-t border-gray-200 pt-6 pb-4">
									{isAuthenticated ? (
										// If user is authenticated, display user's name and logout button
										<div className="px-4">
											<p className="text-base font-medium text-gray-900">
												User's Name
											</p>
											<button
												type="button"
												onClick={handleLogout}
												className="mt-2 text-base font-medium text-indigo-600 hover:text-indigo-500">
												Logout
											</button>
										</div>
									) : (
										// If user is not authenticated, display "Create Account" and "Sign In" buttons
										<div className="px-4">
											<p className="text-base font-medium text-gray-900">
												New customer?
											</p>
											<a
												href="/register"
												className="mt-2 block px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
												Create an account
											</a>
											<a
												href="/login"
												className="mt-2 block text-base font-medium text-indigo-600 hover:text-indigo-500">
												Sign in
											</a>
										</div>
									)}
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<header className="relative z-10">
				<nav aria-label="Top">
					{/* Top navigation */}
					<div className="bg-gray-900">
						<div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
							{/* blank div */}
							<div className="hidden lg:block lg:flex-1"></div>

							<p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
								Get free delivery on orders over $5,000
							</p>

							<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
								{isAuthenticated ? (
									// If user is authenticated, display user's name and logout button
									<>
										<span className="text-sm font-medium text-white">
											User's Name
										</span>
										<button
											type="button"
											onClick={handleLogout}
											className="text-sm font-medium text-white hover:text-gray-100">
											Logout
										</button>
									</>
								) : (
									// If user is not authenticated, display "Create Account" and "Sign In" buttons
									<>
										<a
											href="/register"
											className="text-sm font-medium text-white hover:text-gray-100">
											Create an account
										</a>
										<span className="h-6 w-px bg-gray-600" aria-hidden="true" />
										<a
											href="/login"
											className="text-sm font-medium text-white hover:text-gray-100">
											Sign in
										</a>
									</>
								)}
							</div>
						</div>
					</div>

					{/* Secondary navigation */}
					<div className="bg-white">
						<div className="border-b border-gray-200">
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 items-center justify-between">
									{/* Logo (lg+) */}
									<div className="hidden lg:flex lg:items-center">
										<a
											href="/"
											className="flex items-center text-indigo-600 font-bold">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6 mr-2">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
											Watchy
										</a>
									</div>

									<div className="hidden h-full lg:flex">
										{/* Mega menus */}
										<Popover.Group className="ml-8">
											<div className="flex h-full justify-center space-x-8">
												{navigation.pages.map((page) => (
													<a
														key={page.name}
														href={page.href}
														className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
														{page.name}
													</a>
												))}
											</div>
										</Popover.Group>
									</div>

									{/* Mobile menu and search (lg-) */}
									<div className="flex flex-1 items-center lg:hidden">
										<button
											type="button"
											className="-ml-2 rounded-md bg-white p-2 text-gray-400"
											onClick={() => setMobileMenuOpen(true)}>
											<span className="sr-only">Open menu</span>
											<Bars3Icon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>

									{/* Logo (lg-) */}
									<a href="/" className="lg:hidden text-indigo-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</a>

									<div className="flex flex-1 items-center justify-end">
										<div className="flex items-center lg:ml-8">
											<div className="flow-root">
												<a
													href="/shopping-cart"
													className="group -m-2 flex items-center p-2">
													<ShoppingCartIcon
														className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
														aria-hidden="true"
													/>
													<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
														0
													</span>
													<span className="sr-only">
														items in cart, view bag
													</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
