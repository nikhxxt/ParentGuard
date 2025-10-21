const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
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

