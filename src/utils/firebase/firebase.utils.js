import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// It's ok to expose this api key
const firebaseConfig = {
  apiKey: "AIzaSyDZjknjbjF3ovBG2v6v9RbhCDP5LDPsHSo",
  authDomain: "royaltea-d529d.firebaseapp.com",
  projectId: "royaltea-d529d",
  storageBucket: "royaltea-d529d.firebasestorage.app",
  messagingSenderId: "542739529972",
  appId: "1:542739529972:web:ceeea8b928eed31df69ea1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
