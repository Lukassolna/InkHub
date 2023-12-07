import HomePageView from "../views/homePageView";
import SearchResultView from "../views/searchResultView";



export default
function HomePage(props){
    function chosenWriterACB(writer){console.log(writer)
    }
    function updateTextACB(query){
        props.model.setSearchQuery(query)
        props.model.setSearchWriterQuery(query)
    }
    function doSearchACB(){
    if (props.model.searchOption === 1){
        props.model.searchMovie(props.model.searchname) 
        window.location.hash="#/movieresults"}

    if (props.model.searchOption === 2){
        props.model.searchWriters(props.model.searchWriter) 
        window.location.hash="#/writersresults"
    }

    }

    function setMoviesOptionACB(){

        props.model.searchOption = 1
        console.log(props.model.searchOption)
        
    }

    function setWritersOptionACB(){
        props.model.searchOption = 2
        console.log(props.model.searchOption)
    }

    function searchResults(){
        return <SearchResultView movieClick={chooseMovieACB}/>
    }
    
    return <div><HomePageView writerClick = {chosenWriterACB} writeText = {updateTextACB} searchFired={doSearchACB} 
    moviesSelect ={setMoviesOptionACB} writersSelect={setWritersOptionACB} currentOption ={props.model.searchOption}
    currentText = {props.model.searchname}/>
    



</div>
}