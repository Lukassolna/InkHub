import UserView from "../views/userView";
import resolvePromise from "../resolvePromise";
import { fetchMovieData } from "../movieSource";

export default
function User(props){
   /*for (var id in props.model.favouriteMoviesIDS){props.model.getSpecificMovieData(props.model.favouriteMoviesIDS[id])
        props.model.faveMovies = [...props.model.faveMovies, props.model.currentMoviePromiseState2]
        props.model.currentMoviePromiseState2 = {}  }
        */

    
   function mapCB(id){

        props.model.getSpecificMovieData(id)
        
        props.model.faveMovies.push(props.model.currentMoviePromiseState2)
        props.model.currentMoviePromiseState2 = {}
        
   }
   
    props.model.favouriteMoviesIDS.map(mapCB)
    
    
    



    
    
    
   
    return <UserView hey={props.model.faveMovies}/>;}