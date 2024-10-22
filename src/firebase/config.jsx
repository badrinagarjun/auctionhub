// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMrjHHUDfSQi-xmKbfb72HnG2p2DOocO0",
  authDomain: "auctionhub-53ad5.firebaseapp.com",
  projectId: "auctionhub-53ad5",
  storageBucket: "auctionhub-53ad5.appspot.com",
  messagingSenderId: "1067624539528",
  appId: "1:1067624539528:web:80992c39df13b736cb863d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);