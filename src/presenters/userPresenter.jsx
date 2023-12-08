import UserView from "../views/userView";
import resolvePromise from "../resolvePromise";
import { fetchMovieData } from "../movieSource";

export default
function User(props){
    function removeItNow(id){
        console.log(id)
        props.model.removeFromFaves(id)
    }
    
    
   /*function mapCB(id){

        props.model.getSpecificMovieData(id)
        
        props.model.faveMovies.push(props.model.currentMoviePromiseState2)
        props.model.currentMoviePromiseState2 = {}
        
   }
   
    props.model.favouriteMoviesIDS.map(mapCB)*/
    
   
    return <UserView hey={props.model.faveMovies} removeMovie={removeItNow}/>;}