import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoDFCwIdLOg9PhDH7ggTQBjHtZK1xRbgk",
  authDomain: "parentguard-106c8.firebaseapp.com",
  projectId: "parentguard-106c8",
  storageBucket: "parentguard-106c8.firebasestorage.app",
  messagingSenderId: "50414256935",
  appId: "1:50414256935:web:6c53309ee650c0aca79f02",
  measurementId: "G-SGY59CWTYB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

