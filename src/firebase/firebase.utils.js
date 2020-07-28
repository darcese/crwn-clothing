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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) console.log("Auth still doesn't exist");
  if(userAuth) console.log("auth exists");
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

   
