// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPIQuIDDctyi0t1ulBbL9rpXqZ3qRQFqI",
  authDomain: "newsium-62fe8.firebaseapp.com",
  projectId: "newsium-62fe8",
  storageBucket: "newsium-62fe8.appspot.com",
  messagingSenderId: "281582022209",
  appId: "1:281582022209:web:05656d20f4cf2b524620c0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth=getAuth();
