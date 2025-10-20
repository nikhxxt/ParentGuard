const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "<YOUR_FIREBASE_API_KEY>",
  authDomain: "<YOUR_FIREBASE_AUTH_DOMAIN>",
  projectId: "<YOUR_FIREBASE_PROJECT_ID>"
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
