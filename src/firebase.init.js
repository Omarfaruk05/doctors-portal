// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwFvau2wE9w0CVjNEM78bcXvsRlX0bJEg",
  authDomain: "doctors-portal-d693f.firebaseapp.com",
  projectId: "doctors-portal-d693f",
  storageBucket: "doctors-portal-d693f.appspot.com",
  messagingSenderId: "863357665401",
  appId: "1:863357665401:web:25113241e318edf95bd4a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;