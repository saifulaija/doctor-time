// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy8O9cfvx9ovgjLjrYE84vJK8q4CEDXKQ",
  authDomain: "easy-shop-limited.firebaseapp.com",
  projectId: "easy-shop-limited",
  storageBucket: "easy-shop-limited.appspot.com",
  messagingSenderId: "832954532468",
  appId: "1:832954532468:web:c5ce4840d4e08474d1c721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;