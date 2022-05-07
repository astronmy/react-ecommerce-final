import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEBSxnOkanieaZAM5AvnRlw9pYxkPkqYo",
  authDomain: "coderhousereactjsfirebase.firebaseapp.com",
  projectId: "coderhousereactjsfirebase",
  storageBucket: "coderhousereactjsfirebase.appspot.com",
  messagingSenderId: "793056798632",
  appId: "1:793056798632:web:2fbf618e0fc0f28996df9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseStorage = getFirestore(app)