// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxdJ8-DknlyJST5NoZ91pYvYO94sqdvns",
  authDomain: "inventory-management-d3a09.firebaseapp.com",
  projectId: "inventory-management-d3a09",
  storageBucket: "inventory-management-d3a09.appspot.com",
  messagingSenderId: "420532995385",
  appId: "1:420532995385:web:6e40736fe310792636d4e8",
  measurementId: "G-7J0EP96ZFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app)

export {fireStore}