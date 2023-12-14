import UserView from "../views/userView";
import resolvePromise from "../resolvePromise";
import { fetchMovieData } from "../movieSource";

export default
function User(props){
    function removeItNow(id){
        console.log(id)
        props.model.removeFromFaves(id)
    }
    
   
    return <UserView faveMoviesObject={props.model.faveMovies} removeMovie={removeItNow}/>;}