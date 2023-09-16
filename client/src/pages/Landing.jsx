// ASSETS
import rolex1 from "../assets/rolex1.jpg";
import speedmaster from "../assets/speedmaster.jpg";
import breitling from "../assets/breitling.jpg";
import patek from "../assets/patekphilippe.jpg";

const latestArrivals = [
	{
		id: 1,
		name: "Rolex Datejust",
		color: "Black",
		price: "$12,500",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Black machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 2,
		name: "Omega Seamaster",
		color: "Blue",
		price: "$9,800",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Blue machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 3,
		name: "TAG Heuer Carrera",
		color: "Silver",
		price: "$10,200",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Silver machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 4,
		name: "Patek Philippe Calatrava",
		color: "White",
		price: "$15,750",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"White machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 5,
		name: "Breitling Navitimer",
		color: "Black",
		price: "$11,900",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Black machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 6,
		name: "Cartier Santos",
		color: "Gold",
		price: "$18,500",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Gold machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 7,
		name: "Hublot Big Bang",
		color: "Red",
		price: "$14,300",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Red machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 8,
		name: "IWC Portugieser",
		color: "Blue",
		price: "$13,600",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Blue machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 9,
		name: "Jaeger-LeCoultre Reverso",
		color: "Brown",
		price: "$9,200",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Brown machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 10,
		name: "Panerai Luminor",
		color: "Black",
		price: "$10,800",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Black machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 11,
		name: "Tudor Black Bay",
		color: "Blue",
		price: "$4,700",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Blue machined steel pen with hexagonal grip and small white logo at top.",
	},
	{
		id: 12,
		name: "Zenith El Primero",
		color: "Silver",
		price: "$7,900",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
		imageAlt:
			"Silver machined steel pen with hexagonal grip and small white logo at top.",
	},
];
const offers = [
	{
		name: "AUTHORIZED RETAILER",
		description:
			"Each new watch we sell is authentic and includes extended warranty.",
	},
	{
		name: "EASY RETURNS & EXCHANGES",
		description: "No-hassle returns within 7 days. No questions asked.",
	},
	{
		name: "Currated Collection",
		description:
			"We offer only the best products that we have personally tested.",
	},
];
const watchType = [
	{
		name: "Travel Watches",
		href: "#",
		imageSrc:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-rolex-gmt-master-ii-front-1602184959.jpg?crop=1.00xw:0.648xh;0,0.0945xh&resize=980:*",
	},
	{
		name: "Chronograph Watches",
		href: "#",
		imageSrc:
			"https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/05/Top-Chronograph-3-2.jpg?tr=q-70",
	},
	{
		name: "Dress Watches",
		href: "#",
		imageSrc:
			"https://monochrome-watches.com/wp-content/uploads/2023/04/Rolex-Perpetual-1908-Dress-Watch-Yellow-Gold-reference-52508-Calibre-7140-Hands-On-Review-8.jpg",
	},
	{
		name: "Dive Watches",
		href: "#",
		imageSrc:
			"https://watchbox-blog.imgix.net/wp-content/uploads/2021/02/Panerai-Divers-Watch-In-Water.jpg?max-w=1024&q=50&auto=format,compress&usm=10&usmrad=3",
	},
	{
		name: "On Sale",
		href: "#",
		imageSrc:
			"https://static.chrono24.com/magazine/wp-content/uploads/2019/11/Straps-Watchgecko-Tudor-Black-Bay-58.jpg",
	},
];
const accessories = [
	{
		name: "Straps",
		href: "#",
		imageSrc:
			"https://www.bartonwatchbands.com/cdn/shop/files/Elite_Silicone_31186251-e191-4bc1-b5d8-636035d10033.jpg?v=1614314904&width=1600",
	},
	{
		name: "Travel & Storage",
		href: "#",
		imageSrc:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-cases-rolls-and-pouches-lead-1620778139.jpg?crop=1.00xw:0.756xh;0,0.0416xh&resize=1200:*",
	},
	{
		name: "Tools",
		href: "#",
		imageSrc:
			"https://www.watchgecko.com/cdn/shop/articles/Link-Removal-Tool-2.jpg?v=1654779553",
	},
	{
		name: "Books & Magazines",
		href: "#",
		imageSrc:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-watch-books-refresh-lead-6477746245353.jpg?crop=1xw:1xh;center,top&resize=1200:*",
	},
	{
		name: "On Sale",
		href: "#",
		imageSrc:
			"https://cdn.hiconsumption.com/wp-content/uploads/2021/06/Best-Watch-Accessories-0-Hero.jpg",
	},
];
const testimonials = [
	{
		id: 1,
		quote:
			"My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
		attribution: "Ana Tran, New York",
	},
	{
		id: 2,
		quote:
			"I had to return a watch that didn’t excite me. The whole process was so simple that I ended up ordering two new watches!",
		attribution: "Kyle Longsworth, Austin",
	},
	{
		id: 3,
		quote:
			"Now that I’ve been promoted at my job, I’ll probably order a few more watches. It’s just so convenient, and I know every watch is 100% authentic.",
		attribution: "Jeremy Roberts, San Francisco",
	},
];
const footerNavigation = {
	shop: [
		{ name: "Latest Arrivals", href: "#" },
		{ name: "New Watches", href: "#" },
		{ name: "Pre-Owned Watches", href: "#" },
		{ name: "Accessories", href: "#" },
	],
	company: [
		{ name: "Who we are", href: "#" },
		{ name: "Sustainability", href: "#" },
		{ name: "Press", href: "#" },
		{ name: "Careers", href: "#" },
		{ name: "Terms & Conditions", href: "#" },
		{ name: "Privacy", href: "#" },
	],
	account: [
		{ name: "Manage Account", href: "#" },
		{ name: "Returns & Exchanges", href: "#" },
		{ name: "Redeem a Gift Card", href: "#" },
	],
	connect: [
		{ name: "Contact Us", href: "#" },
		{ name: "Twitter", href: "#" },
		{ name: "Instagram", href: "#" },
		{ name: "Pinterest", href: "#" },
	],
};

const Landing = () => {
	return (
		<div className="bg-white">
			{/* Hero */}
			<section className="relative overflow-hidden">
				<div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
					<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
						<div className="sm:max-w-lg">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								The best place to buy a watch
							</h1>
							<p className="mt-4 text-xl text-gray-500">
								From vintage favorites to modern divers, we have exactly what
								you are looking for.
							</p>
						</div>
						<div>
							<div className="mt-10">
								{/* Decorative image grid */}
								<div
									aria-hidden="true"
									className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
									<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
										<div className="flex items-center space-x-6 lg:space-x-8">
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
													<img
														src={rolex1}
														alt="Rolex Datejust"
														className="h-full w-full object-none object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src={speedmaster}
														alt="Breitling Navitimer"
														className="h-full w-full object-none object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src={patek}
														alt="Patek Philippe Nautilus"
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src={breitling}
														alt=""
														className="h-full w-full object-none object-center"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<a
									href="#"
									className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
									Shop Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Latest Arrivals */}
			<section aria-labelledby="latest-heading">
				<div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6  lg:px-8 lg:pt-32">
					<div className="md:flex md:items-center md:justify-between">
						<h2
							id="favorites-heading"
							className="text-3xl font-bold tracking-tight text-gray-900">
							Latest Arrivals
						</h2>
					</div>

					<div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
						{latestArrivals.map((product) => (
							<div key={product.id} className="group relative mb-10">
								<div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
									<img
										src={product.imageSrc}
										alt={product.imageAlt}
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<h3 className="mt-4 text-sm text-gray-700">
									<a href={product.href}>
										<span className="absolute inset-0" />
										{product.name}
									</a>
								</h3>
								<p className="mt-1 text-sm text-gray-500">{product.color}</p>
								<p className="mt-1 text-sm font-medium text-gray-900">
									{product.price}
								</p>
							</div>
						))}
					</div>

					<div className="mt-8 text-sm flex justify-center">
						<a
							href="#"
							className="font-medium text-white bg-indigo-500 p-6 rounded-lg hover:text-indigo-500 hover:bg-white hover:outline">
							Shop All New Arrivals
						</a>
					</div>
				</div>
			</section>

			{/* Informational Divider */}
			<section className="mt-20 py-10 bg-gray-100">
				<nav aria-label="Offers" className="order-last lg:order-first">
					<div className="mx-auto max-w-7xl lg:px-8">
						<ul
							role="list"
							className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
							{offers.map((offer) => (
								<li key={offer.name} className="flex flex-col">
									<a
										href={offer.href}
										className="relative flex flex-1 flex-col justify-center px-4 py-6 text-center focus:z-10">
										<p className="text-sm text-gray-500">{offer.name}</p>
										<p className="font-semibold text-gray-900">
											{offer.description}
										</p>
									</a>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</section>

			{/* CTA - New Watches */}
			<section
				aria-labelledby="social-impact-heading"
				className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
				<div className="relative overflow-hidden rounded-lg">
					<div className="absolute inset-0">
						<img
							src="https://prestige-watches.co.uk/wp-content/uploads/top-selling-luxury-watch-brands.jpeg"
							alt=""
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
						<div className="sm:max-w-lg">
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
								New Watches
							</h2>
							<p className="mt-4 text-xl text-gray-100">
								A new watch is a lifelong companion, ready to be part of your
								story.
							</p>
							<a
								href="#"
								className="mt-8 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
								Shop Now
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Accessories section */}
			<section
				aria-labelledby="category-heading"
				className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
				<div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
					<h2
						id="category-heading"
						className="text-2xl font-bold tracking-tight text-gray-900">
						Shop Accessories
					</h2>
				</div>

				<div className="mt-4 flow-root">
					<div className="-my-2">
						<div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
							<div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
								{accessories.map((category) => (
									<a
										key={category.name}
										href={category.href}
										className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
										<span aria-hidden="true" className="absolute inset-0">
											<img
												src={category.imageSrc}
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</span>
										<span
											aria-hidden="true"
											className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
										/>
										<span className="relative mt-auto text-center text-xl font-bold text-white">
											{category.name}
										</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 px-4 sm:hidden">
					<a
						href="#"
						className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
						Browse all categories
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>
			</section>

			{/* Category section */}
			<section
				aria-labelledby="category-heading"
				className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
				<div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
					<h2
						id="category-heading"
						className="text-2xl font-bold tracking-tight text-gray-900">
						Shop by Watch Type
					</h2>
				</div>

				<div className="mt-4 flow-root">
					<div className="-my-2">
						<div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
							<div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
								{watchType.map((category) => (
									<a
										key={category.name}
										href={category.href}
										className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
										<span aria-hidden="true" className="absolute inset-0">
											<img
												src={category.imageSrc}
												alt=""
												className="h-full w-full object-none object-center"
											/>
										</span>
										<span
											aria-hidden="true"
											className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
										/>
										<span className="relative mt-auto text-center text-xl font-bold text-white">
											{category.name}
										</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 px-4 sm:hidden">
					<a
						href="#"
						className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
						Browse all categories
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>
			</section>

			{/* Sale & Testimonials */}
			<div className="relative overflow-hidden mt-24">
				{/* Decorative background image and gradient */}
				<div aria-hidden="true" className="absolute inset-0">
					<div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
						<img
							src="https://prestige-watches.co.uk/wp-content/uploads/top-selling-luxury-watch-brands.jpeg"
							alt=""
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<div className="absolute inset-0 bg-white bg-opacity-25" />
					<div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
				</div>

				{/* Sale */}
				<section
					aria-labelledby="sale-heading"
					className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<h2
							id="sale-heading"
							className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
							Get 25% off during our one-time sale
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-xl text-gray-700">
							Most of our products are limited releases that won't come back.
							Get your favorite items while they're in stock.
						</p>
						<a
							href="#"
							className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto">
							Get access to our one-time sale
						</a>
					</div>
				</section>

				{/* Testimonials */}
				<section
					aria-labelledby="testimonial-heading"
					className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<h2
							id="testimonial-heading"
							className="text-2xl font-bold tracking-tight text-gray-900">
							What are people saying?
						</h2>

						<div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
							{testimonials.map((testimonial) => (
								<blockquote key={testimonial.id} className="sm:flex lg:block">
									<svg
										width={24}
										height={18}
										viewBox="0 0 24 18"
										aria-hidden="true"
										className="flex-shrink-0 text-gray-300">
										<path
											d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
											fill="currentColor"
										/>
									</svg>
									<div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
										<p className="text-lg text-gray-600">{testimonial.quote}</p>
										<cite className="mt-4 block font-semibold not-italic text-gray-900">
											{testimonial.attribution}
										</cite>
									</div>
								</blockquote>
							))}
						</div>
					</div>
				</section>
			</div>

			{/* Footer */}
			<footer aria-labelledby="footer-heading" className="bg-gray-900">
				<h2 id="footer-heading" className="sr-only">
					Footer
				</h2>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
						<div className="grid grid-cols-2 gap-8 xl:col-span-2">
							<div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
								<div>
									<h3 className="text-sm font-medium text-white">Shop</h3>
									<ul role="list" className="mt-6 space-y-6">
										{footerNavigation.shop.map((item) => (
											<li key={item.name} className="text-sm">
												<a
													href={item.href}
													className="text-gray-300 hover:text-white">
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className="text-sm font-medium text-white">Company</h3>
									<ul role="list" className="mt-6 space-y-6">
										{footerNavigation.company.map((item) => (
											<li key={item.name} className="text-sm">
												<a
													href={item.href}
													className="text-gray-300 hover:text-white">
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
								<div>
									<h3 className="text-sm font-medium text-white">Account</h3>
									<ul role="list" className="mt-6 space-y-6">
										{footerNavigation.account.map((item) => (
											<li key={item.name} className="text-sm">
												<a
													href={item.href}
													className="text-gray-300 hover:text-white">
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className="text-sm font-medium text-white">Connect</h3>
									<ul role="list" className="mt-6 space-y-6">
										{footerNavigation.connect.map((item) => (
											<li key={item.name} className="text-sm">
												<a
													href={item.href}
													className="text-gray-300 hover:text-white">
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="border-t border-gray-800 py-10">
						<p className="text-sm text-gray-400">
							Copyright &copy; 2023 Watchy, Inc.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Landing;
