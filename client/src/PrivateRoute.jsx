// PrivateRoute.jsx
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Import your authentication context here

function PrivateRoute({ children, ...rest }) {
	const { user } = useAuth(); // Replace with your actual user authentication check

	return (
		<Route
			{...rest}
			element={user ? children : <Navigate to="/login" />} // Redirect to login if user is not authenticated
		/>
	);
}

export default PrivateRoute;
