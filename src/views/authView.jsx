export default
function AuthView(props){
    function toUserACB(){
        window.location.hash="#/user"
    }
    return(
    <div class="authBar">
    <div class="generalText" id="app">
      {props.currentUser === undefined ? "Firebase not initialized" : 
       props.currentUser === null ? "Login" : 
       `User ID: ${props.currentUser}`}
    </div>
    <button class="auth-button" id="authButton" onClick={props.authButton}>
      {props.currentUser ? 'Sign Out' : 'Sign In with Google'}
    </button>
    
    <img class="hide-bg alignstar" src={"https://live.staticflickr.com/65535/53395218564_714090c10a_b.jpg"} 
     onClick={toUserACB}></img>
        

    
  </div>)
}