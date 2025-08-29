// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqJIYFnYesqDL2_e0dVVMKDr7fs-zqSmw",
  authDomain: "restoran-e0e99.firebaseapp.com",
  projectId: "restoran-e0e99",
  storageBucket: "restoran-e0e99.firebasestorage.app",
  messagingSenderId: "529498486094",
  appId: "1:529498486094:web:27e2f832ef39db51cf5a1f",
  measurementId: "G-K50KW9D0ZL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);