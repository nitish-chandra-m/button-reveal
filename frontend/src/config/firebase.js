import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/performance";

//Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyBVzegGCeKj4egAu1MNhq6hKxJdqegHN1c",
  authDomain: "virtual-launch.firebaseapp.com",
  databaseURL: "https://virtual-launch.firebaseio.com",
  projectId: "virtual-launch",
  storageBucket: "virtual-launch.appspot.com",
  messagingSenderId: "184963675978",
  appId: "1:184963675978:web:6ae29733659b51950af3b3",
});

export const firestore = firebase.firestore();
export const perf = firebase.performance();
