// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtBWr9948xvM27TM_E6NcUXMme7Wfjzro",
  authDomain: "skill-navigation.firebaseapp.com",
  projectId: "skill-navigation",
  storageBucket: "skill-navigation.appspot.com",
  messagingSenderId: "222255524195",
  appId: "1:222255524195:web:88efc4ffb8ed25a7ad4b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)