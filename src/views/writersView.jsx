import "animate.css"

export default
function WritersView(props){
    function back2search(){
        return window.location.hash="#/writersresults"}

    function moviesCB(movie){
        function resultClickACB(item){
            return props.movieClick(item)
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
    <div>
        <tr class = "animate__animated animate__bounce" >this is the writerspage</tr>
        <button onClick={back2search}>Back to search</button>
        <tr>{props.writerMovies.map(moviesCB)}</tr>
       
        
    </div>
    )
}