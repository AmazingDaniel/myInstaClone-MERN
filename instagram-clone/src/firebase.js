import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDD4bPYI8WCJNm1h1LlveqdnyzyX0-iVFk",
    authDomain: "instagram-clone-2a3c0.firebaseapp.com",
    projectId: "instagram-clone-2a3c0",
    storageBucket: "instagram-clone-2a3c0.appspot.com",
    messagingSenderId: "485208169796",
    appId: "1:485208169796:web:f50ede14ceb4ccf480cb11",
    measurementId: "G-BJG980QGLV"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };