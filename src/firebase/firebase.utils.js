import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDD6Dyq-vXGxxbiSrjQcJBRRJbn5Jctgq0",
    authDomain: "crown-db-57aa1.firebaseapp.com",
    databaseURL: "https://crown-db-57aa1.firebaseio.com",
    projectId: "crown-db-57aa1",
    storageBucket: "crown-db-57aa1.appspot.com",
    messagingSenderId: "1049150560261",
    appId: "1:1049150560261:web:9aaad1ce3a5f0c89c2246c",
    measurementId: "G-ZKLJEPQ4JY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

