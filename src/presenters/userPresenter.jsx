import UserView from "../views/userView";
import resolvePromise from "../resolvePromise";
import { fetchMovieData } from "../movieSource";

export default
function User(props){
    for (let i=0; i++; i<2){props.model.getSpecificMovieData("tt1853728")}
    console.log("Heee"+props.model.favouriteMoviesIDS)
    
    
    



    
    
    
   
    return <UserView hey={props.model.faveMovies}/>;}