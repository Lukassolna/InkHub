

const moviePlace = ["m1","m2","m3","m4"]


export default
function SearchResultView(props){

    function searchText(evt){
        return props.currentText(evt.target.value)}
    
    function searchButton(evt){ 
            return props.searchFired()
        }

    function resultsCB(movies){
        function resultClickACB(evt){
            props.movieClick(movies)}

        return (
        <div onClick={resultClickACB}>
            <td>
                <img src={movies[1]} height={"100"} ></img></td>
            <td>
                {movies[0]} 
            </td>
        </div>)
        }


    

    return ( 
    <div>
        <div class="header">
            {console.log(props.oldSearch)}
        <td><input value= {props.oldSearch} onChange= {searchText}></input></td>
        <td><button onClick= {searchButton}>Search!</button></td>
        </div>

        <div >
            {console.log(props.movieResults)}
            {props.movieResults.map(resultsCB)}
        </div>

    </div>
    )
}