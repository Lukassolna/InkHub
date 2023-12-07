import UserView from "../views/userView";
import { fetchMovieData } from "../movieSource";
import resolvePromise from "../resolvePromise";


export default
function User(props){
   


    return <UserView movies = {props.model.testArray}/>;}