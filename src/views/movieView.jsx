export default
function MovieView(props){

    return ( 
    <div>
        <img src={props.movieData.Poster}></img>
    </div>
    )
}