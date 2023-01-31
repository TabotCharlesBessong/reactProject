import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed';

const config = {
	apiKey:import.meta.env.API_KEY,
	authDomain: "twitter-react-3371b.firebaseapp.com",
	projectId: import.meta.env.PROJECT_ID,
	storageBucket: import.meta.env.STORAGE_BUCKET,
	messagingSenderId:import.meta.env.MESSAGING_SENDER_ID,
	appId: import.meta.env.APP_ID,
	measurementId: import.meta.env.MEASUREMENT_ID,
};

const firebase = Firebase.initializeApp(config)
const {FieldValue} = Firebase.firestore

console.log('firebase',firebase)

// seedDatabase(firebase)

export {firebase,FieldValue}