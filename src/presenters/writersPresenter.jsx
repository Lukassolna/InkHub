import WritersView from "../views/writersView";
import moviesToModel from "../firebaseModel.js"


export default
function Writers(props){



        props.model.setSearchWriterQuery("Tarantino")
        props.model.searchWriters()
        console.log(props.model.searchedWriters)
        props.model.searchMovieByWriter(props.model.searchedWriters[0])
        console.log(props.model.searchWriterResults[0].Title)
        
       
    return <WritersView/>;
}

    
    
       
    