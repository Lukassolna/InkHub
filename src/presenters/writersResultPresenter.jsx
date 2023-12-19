import WritersResultView from "../views/writersResultView"


export default
function WritersResult(props){
   

    function chooseWriterACB(writer){

        props.model.setCurrentWriter(writer)
        props.model.searchMovieByWriter(writer)
        window.location.hash="#/writer"


    }
    function updateTextACB(query){props.model.setSearchWriterQuery(query)
     
    }
    function doSearchACB(){props.model.searchWriters(props.model.searchWriter) }
    function homeTextACB(){props.model.searchname = props.model.searchWriter}
 


    return <WritersResultView writerNames = {props.model.searchedWriters} writerClick={chooseWriterACB}
    oldSearch = {props.model.searchWriter}  currentText = {updateTextACB} searchFired={doSearchACB}
    homeSaver = {homeTextACB}/>

        
    }