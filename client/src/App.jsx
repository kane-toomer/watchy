import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./App.css";
import Layout from "./components/Header/Layout";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Error from "./pages/404";
import Sell from "./pages/Sell";
import Account from "./pages/Account";

function PrivateRoute({ children }) {
	const { user } = useAuth(); // Replace with your actual user authentication check

	return user ? children : <Navigate to="/login" />;
}

function App() {
	return (
		<Routes>
			{/* MAIN */}
			<Route path="/" element={<Layout />}>
				<Route index element={<Landing />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/product" element={<ProductDetail />} />
				<Route path="/shopping-cart" element={<ShoppingCart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/sell" element={<Sell />} />
				<Route
					path="/account"
					element={
						<PrivateRoute>
							<Account />
						</PrivateRoute>
					}
				/>{" "}
				{/* Protected route */}
			</Route>

			{/* AUTH */}
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			{/* ERROR */}
			<Route path="/404" element={<Error />} />
		</Routes>
	);
}

export default App;
