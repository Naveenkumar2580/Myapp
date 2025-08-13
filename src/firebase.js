// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO-d_Xk_v0I-6QBXIrVjAKoe6ecbihkOI",
  authDomain: "my-contact-app-e0f43.firebaseapp.com",
  projectId: "my-contact-app-e0f43",
  storageBucket: "my-contact-app-e0f43.firebasestorage.app",
  messagingSenderId: "746835891227",
  appId: "1:746835891227:web:269be19d3824282caed4be",
  measurementId: "G-77P9XF1BJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
