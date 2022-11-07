// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMjB5QUxbgYt8emHzUxhVsbKAdMxrBuzM",
    authDomain: "cinema-unverse.firebaseapp.com",
    projectId: "cinema-unverse",
    storageBucket: "cinema-unverse.appspot.com",
    messagingSenderId: "361253465201",
    appId: "1:361253465201:web:0d68f3333482b2f55e7fd0",
    measurementId: "G-60KSNVWDK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;