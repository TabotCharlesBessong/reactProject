// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
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
