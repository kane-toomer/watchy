import { useState } from "react";
import { Dialog, Switch } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import {
	CreditCardIcon,
	CubeIcon,
	FingerPrintIcon,
	HeartIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";

const secondaryNavigation = [
	{ name: "General", href: "#", icon: UserCircleIcon, current: true },
	{ name: "Security", href: "#", icon: FingerPrintIcon, current: true },
	{ name: "Saved Watches", href: "#", icon: HeartIcon, current: false },
	{ name: "Orders", href: "#", icon: CubeIcon, current: false },
	{ name: "Billing", href: "#", icon: CreditCardIcon, current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

// Components
import Credentials from "../components/Account/Credentials";
import SavedWatches from "../components/Account/Saved";
import Security from "../components/Account/Security";
import Orders from "../components/Account/Orders";
import Billing from "../components/Account/Billing";

const Account = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
		useState(true);

	const [selectedNavItem, setSelectedNavItem] = useState("General");

	const renderSelectedComponent = () => {
		switch (selectedNavItem) {
			case "General":
				return <Credentials />;
			case "Security":
				return <Security />;
			case "Saved Watches":
				return <SavedWatches />;
			case "Orders":
				return <Orders />;
			case "Billing":
				return <Billing />;
			default:
				return null;
		}
	};

	return (
		<div className="mx-auto max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
			<aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
				<nav className="flex-none px-4 sm:px-6 lg:px-0">
					<ul
						role="list"
						className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
						{secondaryNavigation.map((item) => (
							<li key={item.name}>
								<a
									href={item.href}
									className={classNames(
										item.name === selectedNavItem
											? "bg-gray-50 text-indigo-600"
											: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
										"group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
									)}
									onClick={() => setSelectedNavItem(item.name)}>
									<item.icon
										className={classNames(
											item.name === selectedNavItem
												? "text-indigo-600"
												: "text-gray-400 group-hover:text-indigo-600",
											"h-6 w-6 shrink-0"
										)}
										aria-hidden="true"
									/>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</aside>

			<main className="px-4 py-16 sm:px-10 lg:px-0  lg:flex-auto lg:py-20">
				{renderSelectedComponent()}
			</main>
		</div>
	);
};

export default Account;
