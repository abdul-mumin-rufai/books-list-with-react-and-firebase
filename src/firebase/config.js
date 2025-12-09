import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";     //authentication
import { getFirestore } from "firebase/firestore";  //firestore database


const firebaseConfig = {
    apiKey: "AIzaSyDM6vndXnMOjXqRzoLzigTU03buYc1OhYQ",
    authDomain: "rufai-book-list-with-firebase.firebaseapp.com",
    projectId: "rufai-book-list-with-firebase",
    storageBucket: "rufai-book-list-with-firebase.firebasestorage.app",
    messagingSenderId: "768928976646",
    appId: "1:768928976646:web:03c9f05427784e3b08d887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);