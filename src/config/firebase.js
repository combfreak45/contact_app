// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvJom2CjIKgks74Enm1KZ2gS4wZKmhAwQ",
  authDomain: "vite-contact-case.firebaseapp.com",
  projectId: "vite-contact-case",
  storageBucket: "vite-contact-case.appspot.com",
  messagingSenderId: "272331805777",
  appId: "1:272331805777:web:2ec44c6800585c54fed470",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);