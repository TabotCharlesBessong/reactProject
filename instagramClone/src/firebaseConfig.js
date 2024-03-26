// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgl-5QUcBC9Tcu74nVys1b69jfAbzhdYw",
  authDomain: "twitter-react-3371b.firebaseapp.com",
  projectId: "twitter-react-3371b",
  storageBucket: "twitter-react-3371b.appspot.com",
  messagingSenderId: "532715213869",
  appId: "1:532715213869:web:b442cf30aef1f09619d4a4",
  measurementId: "G-RH1Q7BJ0QD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore();
const storage = getStorage(app);

export { analytics, app, auth, firestore, storage };
