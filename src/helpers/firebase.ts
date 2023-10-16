import { initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, RecaptchaVerifier } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD-CPaAQzlRUn-wx8WDJ7ZN6ztWwKonzcY",
  authDomain: "chatdevzapp.firebaseapp.com",
  databaseURL: "https://chatdevzapp-default-rtdb.firebaseio.com",
  projectId: "chatdevzapp",
  storageBucket: "chatdevzapp.appspot.com",
  messagingSenderId: "743068149338",
  appId: "1:743068149338:web:4a42ee8e1adfa9e8741a63",
  measurementId: "G-GHJTFV0C23"
};

let _fireBaseBackend: Firestore = null
let auth = null
let provider = null

function initFirebaseBackend() {
  console.log("Initializing Firebase app...");
  const app = initializeApp(firebaseConfig);
  console.log("Firebase app initialized.");

  if (!_fireBaseBackend) {
    console.log("Getting Firestore instance...");
    _fireBaseBackend = getFirestore(app);
    console.log("Firestore instance obtained.");
  }

  if (!auth) {
    console.log("Getting Auth instance...");
    auth = getAuth(app);
    console.log("Auth instance obtained.");
  }

  if (!provider) {
    console.log("Creating GoogleAuthProvider instance...");
    provider = new GoogleAuthProvider();
    console.log("GoogleAuthProvider instance created.");
  }
}

function getFirebaseBackend() {
  return _fireBaseBackend
}

export {
  getFirebaseBackend,
  initFirebaseBackend,
  auth,
  provider,
  _fireBaseBackend as db
}
 