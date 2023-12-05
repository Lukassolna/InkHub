

const moviePlace = ["m1","m2","m3","m4"]

export default
function SearchResultView(props){

    function searchText(evt){
        return props.currentText(evt.target.value)}

    function resultsCB(movies){
        function resultClickACB(evt){
            props.movieClick(movies)}

        return  <p class="searchresults" onClick={resultClickACB}>
            {movies} 
        </p>}


    

    return ( 
    <div>
        <div class="header">
        {/*<td><input value={props.model.searchname|| ""} onChange= {searchText}></input></td>*/}
        </div>

        <div >
            {moviePlace.map(resultsCB)}
        </div>

    </div>
    )
}