
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDSL_eOx6wuU68fPuTaCmUXprHni5mLzks",
  authDomain: "web-esplai-can-cristu.firebaseapp.com",
  databaseURL: "https://web-esplai-can-cristu-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "web-esplai-can-cristu",
  storageBucket: "web-esplai-can-cristu.firebasestorage.app",
  messagingSenderId: "164439465869",
  appId: "1:164439465869:web:1219dc34416a10ee80a7c4",
  measurementId: "G-YWFJ71M71F"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
