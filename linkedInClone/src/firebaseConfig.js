// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjOoH8XR1xndbWAi2FSkqg9wQDjLfugq0",
  authDomain: "twitter-react-3371b.firebaseapp.com",
  projectId: "twitter-react-3371b",
  storageBucket: "twitter-react-3371b.appspot.com",
  messagingSenderId: "532715213869",
  appId: "1:532715213869:web:edccbdb5332d054b19d4a4",
  measurementId: "G-2YDXCBDXWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth,app}