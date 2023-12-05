import HomePageView from "../views/homePageView";
import SearchResultView from "../views/searchResultView";

export default
function HomePage(props){
    function chosenWriterACB(writer){console.log(writer)
    }
    function updateTextACB(query){props.model.setSearchQuery(query)
        console.log(props.model.searchname)
        /*props.text = props.model.setSearchQuery(query)*/
    }
    function doSearchACB(){props.model.searchMovie(props.model.searchname) 
    window.location.hash="#/results"
    }

    function searchResults(){
        return <SearchResultView movieClick={chooseMovieACB}/>
    }
    
    return <div><HomePageView writerClick = {chosenWriterACB} currentText = {updateTextACB} searchFired={doSearchACB}/>;
    {searchResults}



</div>
}