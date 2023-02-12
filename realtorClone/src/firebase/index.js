// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey:import.meta.env.API_KEY,
	authDomain:import.meta.env.AUTH_DOMAIN ,
	projectId:import.meta.env.PROJECT_ID,
	storageBucket: "twitter-react-3371b.appspot.com",
	messagingSenderId: "532715213869",
	appId:import.meta.env.APP_ID ,
	measurementId: "G-S201F39EYY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
