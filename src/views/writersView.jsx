import "animate.css"

export default
function WritersView(props){
    function back2search(){
        console.log(props.toggleCheck)
        if (props.toggleCheck === true){
            window.location.hash="#/writersresults"}
        else {
            window.location.hash="#/"}}

        
        

    function moviesCB(movie){
        function resultClickACB(item){
            return props.movieClick(movie.imdbID)
        }
       

        return (
            <table onClick={resultClickACB} class="topalign">
                
                <td>
                    <img src={movie.Poster} height={"100"} width={"70"} ></img></td>
                <td>
                    <table >
                        <tr class="titletext" >{movie.Title}</tr>
                    </table>
                </td>
            </table>)

    }

    return ( 
        <table>
    <td>
        <tr class = "animate__animated animate__bounce search-button" >{props.writerName}</tr>
        <img class = "animate__animated animate__bounce poster-container" src={props.writerPic}></img>
        <button class="search-button" onClick={back2search}>Back</button>
    </td>
    <td>

        
        <tr>{props.writerMovies.map(moviesCB)}</tr>
       
        </td>
        </table>
    
    )
}