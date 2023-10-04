import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDlB91la83Z5XBZQ1dg6GQyRQlD6i7Zm_E",
	authDomain: "watchy-e130e.firebaseapp.com",
	projectId: "watchy-e130e",
	storageBucket: "watchy-e130e.appspot.com",
	messagingSenderId: "430516903306",
	appId: "1:430516903306:web:534c68d29cc2602e4afc73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
	auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	db,
	onAuthStateChanged,
};
