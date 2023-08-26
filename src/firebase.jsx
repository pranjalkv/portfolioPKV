import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCGV_Jv5nBSD9bTnfmwTNY3i2qv9-aUEWg",
  authDomain: "portfolio-pkv.firebaseapp.com",
  projectId: "portfolio-pkv",
  storageBucket: "portfolio-pkv.appspot.com",
  messagingSenderId: "981589796040",
  appId: "1:981589796040:web:ae4e489e567791fc6831fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)