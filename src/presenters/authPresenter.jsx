import { initializeApp } from "firebase/app";
import config from "../firebaseConfig.js";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import AuthView from "../views/authView";

export default {
  name: "Auth",
  data() {
    return {
      app: initializeApp(config),
      auth: null,
      currentUser: null
    };
  },
  created() {
    this.auth = getAuth(this.app);
    onAuthStateChanged(this.auth, this.loginOrOutACB);
  },
  methods: {
    loginOrOutACB(user) {
      this.currentUser = user ? user.uid : user;
      // Additional logic for model and firebase read/write can be added here
    },
    handleAuthButton() {
      this.currentUser ? signOut(this.auth) : signInWithPopup(this.auth, new GoogleAuthProvider());
    }
  },
  render() {
    return (
      <div>
        <AuthView />
        <div id="app">
          {this.currentUser === undefined ? "Firebase not initialized" : 
           this.currentUser === null ? "Login" : 
           `User ID: ${this.currentUser}`}
        </div>
        <button id="authButton" onClick={this.handleAuthButton}>
          {this.currentUser ? 'Sign Out' : 'Sign In'}
        </button>
      </div>
    );
  }
};
