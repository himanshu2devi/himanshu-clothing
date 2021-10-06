import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('tCKGGYElmtwumSywb7Wg').collection('cartitems').doc('nqER4d5qFqLKEKy7HKnA'); //get specific document
firestore.doc('/users/tCKGGYElmtwumSywb7Wg/cartitems/nqER4d5qFqLKEKy7HKnA'); //get documents
firestore.collection('/users/tCKGGYElmtwumSywb7Wg/cartitems'); //get collection of cartitems
