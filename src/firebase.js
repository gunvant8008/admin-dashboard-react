import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-app-559b8.firebaseapp.com",
  projectId: "dashboard-app-559b8",
  storageBucket: "dashboard-app-559b8.appspot.com",
  messagingSenderId: "431367168206",
  appId: "1:431367168206:web:cdadc7a777537acab6b09f"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)
