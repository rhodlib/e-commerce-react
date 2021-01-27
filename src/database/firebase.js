import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBp5gHoSQZwUkmSNv8hEe9CNQYHjwP8aZA",
    authDomain: "e-commerce-react-coderhouse.firebaseapp.com",
    projectId: "e-commerce-react-coderhouse",
    storageBucket: "e-commerce-react-coderhouse.appspot.com",
    messagingSenderId: "606110909969",
    appId: "1:606110909969:web:4632837cae28f5f7e493b0"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}