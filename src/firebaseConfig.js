// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyApj77-BCTNzT0OUYLkjHrPj15RjZ94b1k",
    authDomain: "foam-catalogue.firebaseapp.com",
    projectId: "foam-catalogue",
    storageBucket: "foam-catalogue.firebasestorage.app",
    messagingSenderId: "362192679531",
    appId: "1:362192679531:web:6b4b5e927afd800f5cf72e",
    measurementId: "G-WGNV7CHEY6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };
