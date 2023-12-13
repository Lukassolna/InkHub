import HomePageView from "../views/homePageView";
import SearchResultView from "../views/searchResultView";



export default
function HomePage(props){


    function chosenWriterACB(writer){ 
        props.model.setCurrentWriter(writer)
        props.model.searchMovieByWriter(writer)
        props.model.setToggleFalse()
        window.location.hash="#/writer"
   
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

/*
    if(!props.model.appStartPromiseState){return <td>no data</td>}
    if(!props.model.appStartPromiseState.promise){return <td>no data</td>}
        
    console.log(props.model.appStartPromiseState.data)
    if(!props.model.appStartPromiseState.data && !props.model.appStartPromiseState.error)
    {return <img src = {"https://static.wikia.nocookie.net/dont-starve-game/images/8/84/Tumbleweed_move_down.gif"}></img>}
    if(props.model.appStartPromiseState.error)
    {
    return <td> {props.model.appStartPromiseState.error}</td>
    }
*/




    
    return <div><HomePageView writerClick = {chosenWriterACB} writeText = {updateTextACB} searchFired={doSearchACB} 
    moviesSelect ={setMoviesOptionACB} writersSelect={setWritersOptionACB} currentOption ={props.model.searchOption}
    currentText = {props.model.searchname} randomWriters = {props.model.generateListOfWriters()}
    homePageData={props.model.appStartPromiseState.data}/>
    



</div>
}