// /js/firebase.js
// Firebase CDN (ES Modules) – no build tools required.
// Pinned to a specific SDK version for stability.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBuoD6HdZiBoEr0e4ELOVQOn0FI6tBvrO4",
  authDomain: "cg-local-autos-a7bad.firebaseapp.com",
  projectId: "cg-local-autos-a7bad",
  storageBucket: "cg-local-autos-a7bad.firebasestorage.app",
  messagingSenderId: "250692809377",
  appId: "1:250692809377:web:d6284ee972007aca5536e0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
