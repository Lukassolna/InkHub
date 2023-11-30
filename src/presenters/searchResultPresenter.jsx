import SearchResultView from "../views/searchResultView";

export default
function SearchResult(props){
    function chooseMovieACB(movie){
        console.log(movie)
    }

    return <SearchResultView movieClick={chooseMovieACB}/>;}