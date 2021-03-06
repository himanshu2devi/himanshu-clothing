import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =
    {
        apiKey: "AIzaSyBb6vHNhsuzkkX7LsHcNcfghB1m1HebpD4",
        authDomain: "himanshu-clothing-db.firebaseapp.com",
        projectId: "himanshu-clothing-db",
        storageBucket: "himanshu-clothing-db.appspot.com",
        messagingSenderId: "949410477438",
        appId: "1:949410477438:web:8432010895a0c34c382f2f",
        measurementId: "G-HF4YE7FX2E"
      };


      export const createUserProfileDocument = async (userAuth, additionalData) => {
          if (!userAuth) return;

          const userRef = firestore.doc(`users/${userAuth.uid}`);

          //console.log(firestore.doc('users/128fdgdfgfd'));

          const snapShot = await  userRef.get();

          if(!snapShot.exists) {
            const { displayName,email } = userAuth;
            const createdAt = new Date();

            try {
              await userRef.set({
                      displayName,
                      email,
                      createdAt,
                      ...additionalData
              })

            }catch(error) {
              console.log('error creating user',error.message);


            }
          }

          return userRef;

      }

      firebase.initializeApp(config);
      //const analytics = getAnalytics(app);
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      
      export default firebase;

