// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnaP6wzSwPqrSvTWEvraQKa7kA4JzBT1k",
  authDomain: "autoalcance-209a5.firebaseapp.com",
  projectId: "autoalcance-209a5",
  storageBucket: "autoalcance-209a5.firebasestorage.app",
  messagingSenderId: "125527902008",
  appId: "1:125527902008:web:c15cd586996423f8f6e3cd",
  measurementId: "G-6C1MYTFHGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)