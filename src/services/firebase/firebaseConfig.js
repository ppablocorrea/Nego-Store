// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqn90LUx8e1aNYVDlsYcsaGdD7NyF2URg",
    authDomain: "negostore-3b304.firebaseapp.com",
    projectId: "negostore-3b304",
    storageBucket: "negostore-3b304.appspot.com",
    messagingSenderId: "94280635767",
    appId: "1:94280635767:web:4309011f730a023de0fd72"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)