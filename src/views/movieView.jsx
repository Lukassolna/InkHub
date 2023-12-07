export default
function MovieView(props){
    function addToFaveButton(evt){ 
        return props.faveAdderFired()
    }
    function backToSearch(){
        window.location.hash="#/movieresults"
    }

    return ( 
    <div>
        <img src={props.movieData.Poster}></img>
        <tr>Plot: {props.movieData.Plot}</tr>
        <tr>Writer: {props.movieData.Writer}</tr>
        <tr>Director: {props.movieData.Director}</tr>
        <tr>IMDB rating: {props.movieData.imdbRating}</tr>
        <button onClick={addToFaveButton}>Add to Favourites</button>
        <button onClick={backToSearch}>Back to search</button>
    </div>
    )
}