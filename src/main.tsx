import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import getAuth
import { getFirestore } from 'firebase/firestore'; // Import getFirestore

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyAqIiPbgGw50Xem1xr4B2jZlLafKrgacTE",
    authDomain: "ai-business-buddy.firebaseapp.com",
    projectId: "ai-business-buddy",
    storageBucket: "ai-business-buddy.firebasestorage.app",
    messagingSenderId: "892348381871",
    appId: "1:892348381871:web:38af711452a0bd3e3c325a",
    measurementId: "G-BPQRWX79LZ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get and export the Auth instance
export const auth = getAuth(app);

// Get and export the Firestore instance
export const db = getFirestore(app);

createRoot(document.getElementById("root")!).render(<App />);


