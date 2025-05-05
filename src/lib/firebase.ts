import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBY9IcrHYp23blI204ijhXm9fRr-zaw_lI",
  authDomain: "hey-cdd72.firebaseapp.com",
  projectId: "hey-cdd72",
  storageBucket: "hey-cdd72.firebasestorage.app",
  messagingSenderId: "509387032763",
  appId: "1:509387032763:web:37986cff6ab7159448019e",
  measurementId: "G-V6TVQF1M2Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);