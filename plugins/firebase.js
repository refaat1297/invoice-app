
import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCYikEnmTfFCMwavGjyAEF9qD5YLPgCVFw",
    authDomain: "a-invoice-app-refaat.firebaseapp.com",
    projectId: "a-invoice-app-refaat",
    storageBucket: "a-invoice-app-refaat.appspot.com",
    messagingSenderId: "145352076169",
    appId: "1:145352076169:web:27f30307b035fd070fcf58",
    measurementId: "G-EJ5HJZE55X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
