import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeH6GOFB1doNp8N0eekQsNZT3ZE4rr0tU",
  projectId: "sendit-mobile",
  storageBucket: "sendit-mobile.appspot.com",
  messagingSenderId: "1090404162161",
  appId: "1:1090404162161:web:256e95b95d7e1e6d9ed9d0",
  measurementId: "G-D4KTBVYJP1",
};



// Ensure Firebase is initialized only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth };
