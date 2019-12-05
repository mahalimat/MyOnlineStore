import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDTlJPgk0r3jgmV8cfwgN_aNxMj-JT1-ho",
  authDomain: "crwn-db-ee600.firebaseapp.com",
  databaseURL: "https://crwn-db-ee600.firebaseio.com",
  projectId: "crwn-db-ee600",
  storageBucket: "crwn-db-ee600.appspot.com",
  messagingSenderId: "955564785384",
  appId: "1:955564785384:web:94d0589863c0dda77d135d",
  measurementId: "G-JFVEEP800E"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
