import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAOJuC2jc5Uq8dZ9zNeahQ_crdf7jBIJ-g",
    authDomain: "i-e2ea9.firebaseapp.com",
    projectId: "i-e2ea9",
    storageBucket: "i-e2ea9.appspot.com",
    messagingSenderId: "674037639150",
    appId: "1:674037639150:web:a2ad912e85ca85479dd0ff",
    measurementId: "G-F7819V66MD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
export { auth, provider };
export default db;