// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClgrKZ2-aBR8DQaoNgNP55Li-ewf9x4to",
  authDomain: "buybusy-1-b8e50.firebaseapp.com",
  projectId: "buybusy-1-b8e50",
  storageBucket: "buybusy-1-b8e50.firebasestorage.app",
  messagingSenderId: "1053923620990",
  appId: "1:1053923620990:web:cbf608f6146e694c55802f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
