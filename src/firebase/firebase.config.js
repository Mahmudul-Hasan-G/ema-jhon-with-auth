// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWF7uoN4NpsNnLSp0A45w2fZQucFBqVMs",
  authDomain: "ema-john-with-auth-a8a26.firebaseapp.com",
  projectId: "ema-john-with-auth-a8a26",
  storageBucket: "ema-john-with-auth-a8a26.appspot.com",
  messagingSenderId: "791221553347",
  appId: "1:791221553347:web:400b22daefc9469fa1ba76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;