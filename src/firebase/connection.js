import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCI2CfN1GfF0lAoub6lYVuBfsD8iNTT-xE",
    authDomain: "burger-queen-d0e74.firebaseapp.com",
    projectId: "burger-queen-d0e74",
    storageBucket: "burger-queen-d0e74.appspot.com",
    messagingSenderId: "971739257390",
    appId: "1:971739257390:web:d9ae3e81d0ce1236acddbf"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);