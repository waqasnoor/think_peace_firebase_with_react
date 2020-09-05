import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGTOC4c-T28_X4CFGKIkON451p92Hhln4",
  authDomain: "think-piece-57f90.firebaseapp.com",
  databaseURL: "https://think-piece-57f90.firebaseio.com",
  projectId: "think-piece-57f90",
  storageBucket: "think-piece-57f90.appspot.com",
  messagingSenderId: "944140974077",
  appId: "1:944140974077:web:2fd0d76c15d8190d648b94",
  measurementId: "G-Z5BCPMHSKB",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase;
