import { Auth, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyD0o9oWGtHHRcF4lOAX44B0cUj1p8dTOAM",
  authDomain: "psychologists-eaa63.firebaseapp.com",
  databaseURL: "https://psychologists-eaa63-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-eaa63",
  storageBucket: "psychologists-eaa63.appspot.com",
  messagingSenderId: "8293920210",
  appId: "1:8293920210:web:583c77c6cf5862839d2c0b"
};

const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

const auth: Auth = getAuth(app);

const db = getDatabase(app);

const data = getFirestore(app);
const dbRef = ref(getDatabase());


export { app, googleAuthProvider, db, data, auth, dbRef };


