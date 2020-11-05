import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/performance";

//Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyALG3r2WCr0Lzgnie3_uVZx7uv_N_X_MRs",
  authDomain: "button-reveal.firebaseapp.com",
  databaseURL: "https://button-reveal.firebaseio.com",
  projectId: "button-reveal",
  storageBucket: "button-reveal.appspot.com",
  messagingSenderId: "1091722635432",
  appId: "1:1091722635432:web:26a130b7793b16e0c2fa9d",
});

export const firestore = firebase.firestore();
export const perf = firebase.performance();
