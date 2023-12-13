import { initializeApp } from "firebase/app";
import config from "../firebaseConfig.js";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import AuthView from "/src/views/authView.jsx"

export default
function Auth(props) {
  const auth = getAuth(props.model.app);

  function loginOrOutACB(user) {
    props.model.currentUser = user ? user.uid : user;
    // Additional logic for model and firebase read/write can be added here
  }

  function handleAuthButton() {
    props.model.currentUser
      ? signOut(auth)
      : signInWithPopup(auth, new GoogleAuthProvider());
  }


  // Set up the onAuthStateChanged listener
  onAuthStateChanged(auth, loginOrOutACB);

  // Expose the public interface
  return (
      <AuthView authButton={handleAuthButton} currentUser={props.model.currentUser}/>
  );
}
