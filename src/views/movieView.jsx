export default
function MovieView(props){
    function addToFaveButton(evt){ 
        return props.faveAdderFired()
    }
    function backToSearch(){
        console.log(props.toggleCheck)
        if (props.toggleCheck === true){
            window.location.hash="#/movieresults"}
        else {
            window.location.hash="#/writer"}
   
    }

    return ( 
        /*
        <tr>
    <td>
        <img src={props.movieData.Poster}></img>
    </td>
    <td>
        <p>Plot: {props.movieData.Plot}</p>
        <p>Writer: {props.movieData.Writer}</p>
        <p>Director: {props.movieData.Director}</p>
        <p>IMDB rating: {props.movieData.imdbRating}</p>
        <button class="search-button" disabled={props.isMovieInFaves} onClick={addToFaveButton}>Add to Favourites</button>
        <button class="search-button" onClick={backToSearch}>Back</button>
    </td>
    </tr>
    */
    <tr>
    <td>
        <div class="movie-container">
            <img src={props.movieData.Poster} class="movie-poster"></img>
            <div class="movie-details">
                <p class="movieNameView">{props.movieData.Title}</p>
                <p>{props.movieData.Plot}</p>
                <p>Writer: {props.movieData.Writer}</p>
                <p>Director: {props.movieData.Director}</p>
                <p>IMDB rating: {props.movieData.imdbRating}</p>
            </div> 
        </div>
        <button class="search-button" disabled={props.isMovieInFaves} onClick={addToFaveButton}>Add to Favourites</button>
        <button class="search-button" onClick={backToSearch}>Back</button>
    </td>
</tr>

    )
}