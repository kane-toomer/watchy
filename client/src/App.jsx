import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";

function App() {
	return (
		<Routes>
			<Route index element={<Register />} />
		</Routes>
	);
}

export default App;
