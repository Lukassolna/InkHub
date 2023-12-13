import WritersResultView from "../views/writersResultView"


export default
function WritersResult(props){
    console.log(props.model.searchedWriters)

    function chooseWriterACB(writer){

        props.model.setCurrentWriter(writer)
        props.model.searchMovieByWriter(writer)
        window.location.hash="#/writer"


        /*
        props.model.setCurrentMovie(movie)
        console.log(props.model.currentMovie)
        console.log(fetchMovieData(props.model.currentMovie))*/
    }
    function updateTextACB(query){props.model.setSearchWriterQuery(query)
        //console.log(props.model.searchname)
        /*props.text = props.model.setSearchQuery(query)*/
    }
    function doSearchACB(){props.model.searchWriters(props.model.searchWriter) }
 


    return <WritersResultView writerNames = {props.model.searchedWriters} writerClick={chooseWriterACB}
    oldSearch = {props.model.searchWriter}  currentText = {updateTextACB} searchFired={doSearchACB}/>

        
    }