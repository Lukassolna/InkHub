import MovieView from "../views/movieView";
import { fetchMovieData } from "../movieSource";

export default
function Movie(props){
    //function checkFavesCB(movie){ return (movie.i === props.model.currentMovie) }
    //function menuAdder(){ props.model.addToFavourites(props.model.currentMoviePromiseState.data)}



if(!props.model.currentMoviePromiseState){return <td>no data 1</td>}
if(!props.model.currentMoviePromiseState.promise){return <td>no data 2</td>}
    
if(!props.model.currentMoviePromiseState.data && !props.model.currentMoviePromiseState.error)

{console.log(props.model.currentMoviePromiseState)
    return <img src = {"https://brfenergi.se/iprog/loading.gif"}></img>}
if(props.model.currentMoviePromiseState.error)
{
return <td> {props.model.currentMoviePromiseState.error}</td>
}
return <DetailsView title={props.model.currentMoviePromiseState.data.Title} plot={props.model.currentDishPromiseState.data.Plot } 
//isDishInMenu = { (props.model.dishes.find(checkMenuCB) ? true: false) } promise = {props.model.currentDishPromiseState} addToMenu= {menuAdder}
/>;   
}
    

    
