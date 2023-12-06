import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsqvTe1-wlka4cLtADbZGSYbFOb5wck8w",
  authDomain: "jeremias-bravo-proyecto-react.firebaseapp.com",
  projectId: "jeremias-bravo-proyecto-react",
  storageBucket: "jeremias-bravo-proyecto-react.appspot.com",
  messagingSenderId: "453535057253",
  appId: "1:453535057253:web:e979113b65e9179db20d8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);