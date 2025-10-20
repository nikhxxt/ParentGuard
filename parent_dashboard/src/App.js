import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "<YOUR_FIREBASE_API_KEY>",
  authDomain: "<YOUR_FIREBASE_AUTH_DOMAIN>",
  projectId: "<YOUR_FIREBASE_PROJECT_ID>"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const snapshot = await getDocs(collection(db, "children/child_001/notifications"));
      setNotifications(snapshot.docs.map(doc => doc.data()));
    };
    fetchNotifications();
  }, []);

  return (
    <div>
      <h1>Parent Dashboard - Child Notifications</h1>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>
            <b>{n.app}</b>: {n.title} - {n.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
