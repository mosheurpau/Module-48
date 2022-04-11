// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC15nWMT--C930f9w17ZRYjrOUq6ZbwkDE",
  authDomain: "ema-john-simple-7f2d3.firebaseapp.com",
  projectId: "ema-john-simple-7f2d3",
  storageBucket: "ema-john-simple-7f2d3.appspot.com",
  messagingSenderId: "295383591146",
  appId: "1:295383591146:web:1b8cf50b4abae30ffd8f93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
