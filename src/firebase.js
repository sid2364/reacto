import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVHPDHvLM6bd1n_VMXZc954thnJB7JVR0",
    authDomain: "reacto-ee758.firebaseapp.com",
    projectId: "reacto-ee758",
    storageBucket: "reacto-ee758.appspot.com",
    messagingSenderId: "458770371775",
    appId: "1:458770371775:web:a4c958eaf8df0ee1e0e20a",
    measurementId: "G-JCK8Z0NK97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);