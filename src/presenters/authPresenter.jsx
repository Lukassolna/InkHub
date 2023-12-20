import { initializeApp } from "firebase/app";
import config from "../firebaseConfig.js";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import AuthView from "/src/views/authView.jsx";

export default function Auth(props) {
  const auth = getAuth(props.model.app);

  function loginOrOutACB(user) {
    props.model.currentUser = user ? user.uid : user;
  }

  function handleAuthButton() {
    props.model.currentUser
      ? signOut(auth)
      : signInWithPopup(auth, new GoogleAuthProvider());
  }

  onAuthStateChanged(auth, loginOrOutACB);

  return (
    <AuthView
      authButton={handleAuthButton}
      currentUser={props.model.currentUser}
    />
  );
}
