import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyDNN7NyOm9M5O6fhoYH_8Weqky5usESRAY",
    authDomain: "classcomet-cc9a3.firebaseapp.com",
    projectId: "classcomet-cc9a3",
    storageBucket: "classcomet-cc9a3.appspot.com",
    messagingSenderId: "1001391316733",
    appId: "1:1001391316733:web:095b445b51f8650403e894",
    measurementId: "G-HTSN1V72HL"
  };
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = app.auth()
const db = app.firestore();
var userAuthenticate = false;
var userEmail = "?"

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      userAuthenticate = true;
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

function userAuthenticated(email){
    userEmail = email;
      return userAuthenticate;
};

function getID(){
    return userEmail
}


  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    auth.signOut();
  };

  export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    getID,
    userAuthenticated,
    logout,
  };
