import UserView from "../views/userView";
import resolvePromise from "../resolvePromise";
import { fetchMovieData } from "../movieSource";

export default
function User(props){
    function removeItNow(id){
        
        props.model.removeFromFaves(id)
    }
    function removeWriterNow(writer){
        console.log(writer)
        props.model.removeFromFaveWriters(writer)
    }
    function chooseUserMovieACB(movie){
        console.log(movie)
        props.model.setCurrentMovie(movie)
        window.location.hash="#/movie"

    }
    
   
    return <UserView hey={props.model.faveMovies} removeMovie={removeItNow}
    favouriteWriters = {props.model.faveWriters} removeWriter= {removeWriterNow}
    movieClicked= {chooseUserMovieACB}/>;}