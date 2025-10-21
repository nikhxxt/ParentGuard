import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXX",
  authDomain: "parentguard-106c8.firebaseapp.com",
  projectId: "parentguard-106c8",
  storageBucket: "parentguard-106c8.appspot.com",
  messagingSenderId: "50414256935",
  appId: "1:50414256935:web:abcdef123456"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
