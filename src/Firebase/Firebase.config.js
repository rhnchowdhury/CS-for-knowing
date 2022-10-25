// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDySke54WX83vAGIIL_xbbr2OWeAE_XMLM",
    authDomain: "cs-for-knowing-and-doing.firebaseapp.com",
    projectId: "cs-for-knowing-and-doing",
    storageBucket: "cs-for-knowing-and-doing.appspot.com",
    messagingSenderId: "755225100671",
    appId: "1:755225100671:web:7603669e34d2b57b32da4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;