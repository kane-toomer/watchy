import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Header/Layout";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<Routes>
			{/* MAIN */}
			<Route path="/" element={<Layout />}>
				<Route index element={<Landing />} />
			</Route>

			{/* AUTH */}
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default App;
