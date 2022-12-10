// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjxdQYftopiKiBOWSRrJ_lj51I7H1D34U",
  authDomain: "react-tourism-spot.firebaseapp.com",
  projectId: "react-tourism-spot",
  storageBucket: "react-tourism-spot.appspot.com",
  messagingSenderId: "256532267309",
  appId: "1:256532267309:web:b570dd1fd2c2f7373913a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
