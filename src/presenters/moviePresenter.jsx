import MovieView from "../views/movieView";
import { fetchMovieData } from "../movieSource";

export default
function Movie(props){

    console.log("hola")
    if(!props.model.currentMoviePromiseState){return <td>no data</td>}
    if(!props.model.currentMoviePromiseState.promise){return <td>no data</td>}
        
    if(!props.model.currentMoviePromiseState.data && !props.model.currentMoviePromiseState.error)
    {return <img src = {"https://brfenergi.se/iprog/loading.gif"}></img>}
    if(props.model.currentMoviePromiseState.error)
    {
    return <td> {props.model.currentMoviePromiseState.error}</td>
    }

    console.log(props.model.currentMoviePromiseState.data)
    return <MovieView movieData={props.model.currentMoviePromiseState.data}/>
}