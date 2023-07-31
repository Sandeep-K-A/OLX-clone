import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkrztVE57mmHXOuej8Imt-N_KZjjdZlT0",
  authDomain: "olx-clone-e896a.firebaseapp.com",
  projectId: "olx-clone-e896a",
  storageBucket: "olx-clone-e896a.appspot.com",
  messagingSenderId: "393750740167",
  appId: "1:393750740167:web:604b9a1dda17be2b9f52e2",
  measurementId: "G-5XGYJ1QTL1"
};

export default firebase.initializeApp(firebaseConfig)

