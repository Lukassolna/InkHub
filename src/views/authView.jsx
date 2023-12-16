export default
function AuthView(props){
    return(
    <div>
    <div class="generalText" id="app">
      {props.currentUser === undefined ? "Firebase not initialized" : 
       props.currentUser === null ? "Login" : 
       `User ID: ${props.currentUser}`}
    </div>
    <button class="auth-button" id="authButton" onClick={props.authButton}>
      {props.currentUser ? 'Sign Out' : 'Sign In with Google'}
    </button>
    <div>

    </div>
  </div>)
}