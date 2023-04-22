// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDjdgGXs2AEpBy9njb1LUzw3vTJDebUe0",
  authDomain: "semesterproject-9e26e.firebaseapp.com",
  projectId: "semesterproject-9e26e",
  storageBucket: "semesterproject-9e26e.appspot.com",
  messagingSenderId: "644103457864",
  appId: "1:644103457864:web:4c4f5d57943b524955dc7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);