// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import itemsdata from "../data/data";

const firebaseConfig = {
  apiKey: "AIzaSyC0T3ISNgodFGRmoFGcXHXcnJphLrLpL1A",
  authDomain: "reactmovies-f65ad.firebaseapp.com",
  projectId: "reactmovies-f65ad",
  storageBucket: "reactmovies-f65ad.appspot.com",
  messagingSenderId: "692161280283",
  appId: "1:692161280283:web:f5af73c489c079d6943bbe",
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export async function saveProductsToFirebase() {
  const collectionMovies = collection(firestoreDB, "movies");

  for (let item of itemsdata) {
    const docref = await addDoc(collectionMovies, item);
    console.log("documento creado con id:", docref.id);
  }
}

export default firestoreDB;
