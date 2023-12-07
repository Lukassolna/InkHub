import "animate.css"

export default
function WritersView(props){

    function moviesCB(movie){
        return <div>{movie.Title}</div>

    }

    return ( 
    <div>
        <tr class = "animate__animated animate__bounce" >this is the writerspage</tr>
        <tr>{props.writerMovies.map(moviesCB)}</tr>
       
        
    </div>
    )
}