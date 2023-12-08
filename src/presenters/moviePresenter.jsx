import MovieView from "../views/movieView";
import { fetchMovieData } from "../movieSource";

export default
function Movie(props){
    function addToFavesACB(){props.model.addToFavourites(props.model.currentMovie);
    console.log("Favourite Movies: "+props.model.favouriteMoviesIDS)}

    console.log("hola")
    if(!props.model.currentMoviePromiseState){return <td>no data</td>}
    if(!props.model.currentMoviePromiseState.promise){return <td>no data</td>}
        
    if(!props.model.currentMoviePromiseState.data && !props.model.currentMoviePromiseState.error)
    {return <img src = {"https://static.wikia.nocookie.net/dont-starve-game/images/8/84/Tumbleweed_move_down.gif"}></img>}
    if(props.model.currentMoviePromiseState.error)
    {
    return <td> {props.model.currentMoviePromiseState.error}</td>
    }

    console.log(props.model.currentMoviePromiseState.data)
    return <MovieView movieData={props.model.currentMoviePromiseState.data} faveAdderFired={addToFavesACB}/>
}