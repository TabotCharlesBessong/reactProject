import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyDgl-5QUcBC9Tcu74nVys1b69jfAbzhdYw",
	authDomain: "twitter-react-3371b.firebaseapp.com",
	projectId: "twitter-react-3371b",
	storageBucket: "twitter-react-3371b.appspot.com",
	messagingSenderId: "532715213869",
	appId: "1:532715213869:web:74897022a02fe32519d4a4",
	measurementId: "G-S201F39EYY",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()

export {app,db}