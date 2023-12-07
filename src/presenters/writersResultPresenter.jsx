import WritersResultView from "../views/writersResultView"


export default
function WritersResult(props){
    console.log(props.model.searchedWriters)

    function chooseWriterACB(writer){
        console.log(writer)

        /*
        props.model.setCurrentMovie(movie)
        console.log(props.model.currentMovie)
        console.log(fetchMovieData(props.model.currentMovie))*/
    }
 


    return <WritersResultView writerNames = {props.model.searchedWriters} writerClick={chooseWriterACB}/>

        
    }