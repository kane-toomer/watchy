import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../firebase/firebase"; // Import your Firebase authentication methods here

// Create a context for the authentication state
const AuthContext = createContext();

// Create a custom hook to access the AuthContext
export const useAuth = () => {
	return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Listen for authentication state changes when the component mounts
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		// Unsubscribe from the listener when the component unmounts
		return unsubscribe;
	}, []);

	// Define your authentication-related functions here
	// For example, signIn, signOut, etc.

	const value = {
		currentUser,
		// Export your authentication-related functions here
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
