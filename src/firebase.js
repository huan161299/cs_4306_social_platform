import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFDrxQCx0PWGC0VgVMZSADoQ929uyKgqE",
    authDomain: "cs-4306-social-platform.firebaseapp.com",
    databaseURL: "https://cs-4306-social-platform.firebaseio.com",
    projectId: "cs-4306-social-platform",
    storageBucket: "cs-4306-social-platform.appspot.com",
    messagingSenderId: "523562692001",
    appId: "1:523562692001:web:f53f33f5b32c0c0901afe0",
    measurementId: "G-FFX85N2GTH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;