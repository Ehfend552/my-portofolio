// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPa5qSuChZlkrdz-4tXvZfQy10ogHj_EU",
  authDomain: "portfolio-fendi.firebaseapp.com",
  projectId: "portfolio-fendi",
  storageBucket: "portfolio-fendi.firebasestorage.app",
  messagingSenderId: "296116923969",
  appId: "1:296116923969:web:253bc43fd7542297a920c0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
