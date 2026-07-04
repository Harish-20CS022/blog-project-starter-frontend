import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBufYg24QlrE-WOjgFUIpY9Pz7WDGTCoyc",
  authDomain: "blog-app-31ef0.firebaseapp.com",
  projectId: "blog-app-31ef0",
  storageBucket: "blog-app-31ef0.firebasestorage.app",
  messagingSenderId: "924832518690",
  appId: "1:924832518690:web:5aee025a7fb78760e8307b",
  measurementId: "G-VHTB904QXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;