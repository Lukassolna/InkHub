import SearchResultView from "../views/searchResultView";

export default
function SearchResult(props){
    function chooseMovieACB(movie){
        console.log(movie)
    }
    function updateTextACB(query){props.model.setSearchQuery(query)
        //console.log(props.model.searchname)
        /*props.text = props.model.setSearchQuery(query)*/
    }
    function doSearchACB(){props.model.searchMovie(props.model.searchname) 
    //window.location.hash="#/results"
    }

    function steffAndOgle(){
    
    

    //if(!props.model.searchResultsPromiseState){return <td>no data</td>}
    //if(!props.model.searchResultsPromiseState.promise){return <td>no data</td>}

    //if(!props.model.searchResultsPromiseState.data && !props.model.searchResultsPromiseState.error)
    //{return <img src = {"https://brfenergi.se/iprog/loading.gif"}></img>}
    //if(props.model.searchResultsPromiseState.error){
    //return <td> {props.model.searchResultsPromiseState.error}</td>}
    return <SearchResultView movieClick={chooseMovieACB} movieResults = {props.model.searchResults} oldSearch = {props.model.searchname}
    currentText = {updateTextACB} searchFired={doSearchACB}/>
    
    

    }
    return <div>
        {steffAndOgle()}
        </div>

    return <SearchResultView movieClick={chooseMovieACB}/>
    
        
    }