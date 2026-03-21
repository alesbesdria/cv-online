import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_8uszitUILRhhqHIDHFeJYBarfboK6yI",
  authDomain: "cv-online-b9ce9.firebaseapp.com",
  projectId: "cv-online-b9ce9",
  storageBucket: "cv-online-b9ce9.firebasestorage.app",
  messagingSenderId: "28014881618",
  appId: "1:28014881618:web:92e8a27258a2d3c8ed688b",
  measurementId: "G-YZ3CSHY7P4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);