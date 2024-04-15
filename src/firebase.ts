import { Auth, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyCzZoPkbBprm3eu5lNt47f1GKMUHoBzPlo",
  authDomain: "learnlingo1.firebaseapp.com",
  databaseURL: "https://learnlingo1-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "learnlingo1",
  storageBucket: "learnlingo1.appspot.com",
  messagingSenderId: "165391341432",
  appId: "1:165391341432:web:edff3e5a1bb989f50f9a8d",
  measurementId: "G-4VXPHQXXJ5"
};

const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

const auth: Auth = getAuth(app);

const db = getDatabase(app);

const data = getFirestore(app);
const dbRef = ref(getDatabase());


export { app, googleAuthProvider, db, data, auth, dbRef };


