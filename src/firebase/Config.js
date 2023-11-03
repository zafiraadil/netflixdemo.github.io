// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'


import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDHE4zAuUpm10836Ewm44mSsJC3iu_Gu5k",
  authDomain: "fir-ca337.firebaseapp.com",
  projectId: "fir-ca337",
  storageBucket: "fir-ca337.appspot.com",
  messagingSenderId: "282261069655",
  appId: "1:282261069655:web:707ca89ba7fce6b4426812",
  measurementId: "G-ZYJ6DHH8EP"
};
  const app=initializeApp(firebaseConfig)
 export const auth=getAuth(app)
 export const db=getFirestore(app)
