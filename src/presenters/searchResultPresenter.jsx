import SearchResultView from "../views/searchResultView";

export default
function SearchResult(props){
    function chooseMovieACB(movie){
        console.log(movie)
    }

    function steffAndOgle(){
    
    

    if(!props.model.searchResultsPromiseState){return <td>no data</td>}
    if(!props.model.searchResultsPromiseState.promise){return <td>no data</td>}

    if(!props.model.searchResultsPromiseState.data && !props.model.searchResultsPromiseState.error)
    {return <img src = {"https://brfenergi.se/iprog/loading.gif"}></img>}
    //if(props.model.searchResultsPromiseState.error){
    //return <td> {props.model.searchResultsPromiseState.error}</td>}
    return <SearchResultView movieClick={chooseMovieACB}/>
    
    

    }
    return <div>
        {steffAndOgle()}
        </div>

    return <SearchResultView movieClick={chooseMovieACB}/>
    
        
    }