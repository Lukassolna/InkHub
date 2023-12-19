export default
function AuthView(props){
    function toUserACB(){
        window.location.hash="#/user"
    }
    function toHomeACB(){
        window.location.hash="#/"
    }
    return(
    <div class="authBar">
         <img class="hide-bg mainlogo" src={"https://live.staticflickr.com/65535/53399465685_478bf306bd_b.jpg"} 
         height={130} onClick={toHomeACB}></img>
    <div class="generalText" id="app">
      {props.currentUser === undefined ? "Firebase not initialized" : 
       props.currentUser === null ? "Login" : 
       "Welcome, Your are now logged in"}
    </div>
    <button class="auth-button" id="authButton" onClick={props.authButton}>
      {props.currentUser ? 'Sign Out' : 'Sign In with Google'}
    </button>
    
    <img class="hide-bg alignstar" src={"https://live.staticflickr.com/65535/53395218564_714090c10a_b.jpg"} 
     onClick={toUserACB}></img>
        

    
  </div>)
}