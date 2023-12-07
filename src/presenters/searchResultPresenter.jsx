import SearchResultView from "../views/searchResultView";
import { fetchMovieData } from "../movieSource";

export default
function SearchResult(props){

    function chooseMovieACB(movie){
        props.model.setCurrentMovie(movie)
        console.log(props.model.currentMovie)
        console.log(fetchMovieData(props.model.currentMovie))
    }
    function updateTextACB(query){props.model.setSearchQuery(query)
        //console.log(props.model.searchname)
        /*props.text = props.model.setSearchQuery(query)*/
    }
    function doSearchACB(){props.model.searchMovie(props.model.searchname) 
    //window.location.hash="#/results"
    }

    return <SearchResultView movieClick={chooseMovieACB} movieResults = {props.model.searchResults} oldSearch = {props.model.searchname}
    currentText = {updateTextACB} searchFired={doSearchACB}/>

        
    }