// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBikL2zVe8CRR7cI8Aq55228Dj2SHfYUM0",
  authDomain: "spjimrinventory.firebaseapp.com",
  projectId: "spjimrinventory",
  storageBucket: "spjimrinventory.firebasestorage.app",
  messagingSenderId: "235359781788",
  appId: "1:235359781788:web:4f46b04c0cdd5591c83e59",
  measurementId: "G-554LMW813G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
