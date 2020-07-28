import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('rDM9uztDfxpwRvAtqKsG').collection('cartItems').doc('okWcdxDCSStPQP9nHEU8');
firestore.doc('/users/rDM9uztDfxpwRvAtqKsG/cartItems/okWcdxDCSStPQP9nHEU8');
firestore.collection('/users/rDM9uztDfxpwRvAtqKsG/cartItems');