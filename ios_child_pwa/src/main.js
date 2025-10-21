import { db } from "../firebase.js";
import { ref, push, set } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

const status = document.getElementById("status");
const notifyBtn = document.getElementById("notifyBtn");

status.innerText = "Connected to Firebase ✅";

notifyBtn.addEventListener("click", async () => {
  const msgRef = push(ref(db, "notifications"));
  await set(msgRef, {
    from: "child",
    message: "Test notification from child",
    time: new Date().toISOString()
  });
  alert("Notification sent to parent!");
});
