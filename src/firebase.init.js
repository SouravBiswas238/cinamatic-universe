// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqBFZxt4MRlmv0hF29OTVel7r-XyYDGLU",
    authDomain: "student-accomodation-b5beb.firebaseapp.com",
    projectId: "student-accomodation-b5beb",
    storageBucket: "student-accomodation-b5beb.appspot.com",
    messagingSenderId: "1010097090385",
    appId: "1:1010097090385:web:e288ce0d31c3a2c746ed70",
    measurementId: "G-LS4HPQT8K8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;