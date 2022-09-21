// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVSnF5Oi4xPj5cPXYFCo3yQhz4TtMrEuk",
  authDomain: "jummi-app.firebaseapp.com",
  projectId: "jummi-app",
  storageBucket: "jummi-app.appspot.com",
  messagingSenderId: "635501105318",
  appId: "1:635501105318:web:8246a369af8bdcbf7b2467"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);

// Database
export const db = getFirestore(initFirebase)