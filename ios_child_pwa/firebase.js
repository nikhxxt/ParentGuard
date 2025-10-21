// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_PUBLIC_FIREBASE_API_KEY",
  authDomain: "yourapp.firebaseapp.com",
  databaseURL: "https://yourapp.firebaseio.com",
  projectId: "yourapp",
  storageBucket: "yourapp.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
