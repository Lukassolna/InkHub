export default
function MovieView(props){
    function addToFaveButton(evt){ 
        return props.faveAdderFired()
    }
    function backToSearch(){
        window.location.hash="#/search"
    }

    return ( 
    <div>
        <img src={props.movieData.Poster}></img>
        <tr> {props.movieData.Plot}</tr>
        <button onClick={addToFaveButton}>Add to Favourites</button>
        <button onClick={backToSearch}>Back to search</button>
    </div>
    )
}