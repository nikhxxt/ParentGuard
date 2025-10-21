const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

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
const db = getFirestore(app);

async function addTestData() {
  const docRef = await addDoc(collection(db, "children/child_001/notifications"), {
    app: "TestApp",
    title: "Test Notification",
    text: "Hello ParentGuard!",
    timestamp: Date.now()
  });
  console.log("Document written with ID: ", docRef.id);
}

addTestData();
