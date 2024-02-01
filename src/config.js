
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwpSMJP3_q2iwC-FnHt3WzO4NE6JP4LXM",
  authDomain: "cardekho-5180c.firebaseapp.com",
  projectId: "cardekho-5180c",
  storageBucket: "cardekho-5180c.appspot.com",
  messagingSenderId: "391930199350",
  appId: "1:391930199350:web:ee39f01e839b18f4b40797",
  measurementId: "G-0B1TLMMVTS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};