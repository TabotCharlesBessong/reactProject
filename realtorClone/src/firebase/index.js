import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyBr3laqLB3In_BjE-YMgBV6S5zJuhGzN8k",
	authDomain: "realtor-clone-76d37.firebaseapp.com",
	projectId: "realtor-clone-76d37",
	storageBucket: "realtor-clone-76d37.appspot.com",
	messagingSenderId: "914835287121",
	appId: "1:914835287121:web:c3323e680d28eda5d45c70",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()

export {app,db}