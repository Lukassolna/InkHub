export default
function AuthView(props){
    return(
    <div>
    <div id="app">
      {props.currentUser === undefined ? "Firebase not initialized" : 
       props.currentUser === null ? "Login" : 
       `User ID: ${props.currentUser}`}
    </div>
    <button id="authButton" onClick={props.authButton}>
      {props.currentUser ? 'Sign Out' : 'Sign In'}
    </button>
    <div>persisted data
      {props.currentUser} 

    </div>
  </div>)
}