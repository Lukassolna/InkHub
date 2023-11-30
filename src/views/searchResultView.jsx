
const moviePlace = ["m1","m2","m3","m4"]

export default
function SearchResultView(props){

    function resultsCB(movies){
        function resultClickACB(evt){
            props.movieClick(movies)}

        return  <p class="searchresults" onClick={resultClickACB}>
            {movies} 
        </p>}


    

    return ( 
    <div>
        <div class="header">
            <input>search</input>
        </div>

        <div >
            {moviePlace.map(resultsCB)}
        </div>

    </div>
    )
}