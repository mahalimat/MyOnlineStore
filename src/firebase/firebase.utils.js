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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
