
export default
function SearchResultView(props){

    function searchText(evt){
        return props.currentText(evt.target.value)}
    
    function searchButton(evt){ 
            return props.searchFired()
        }

    function resultsCB(movies){

        function resultClickACB(evt){
            props.movieClick(movies[3])
            window.location.hash="#/movie"
        }

        return (
        <table onClick={resultClickACB} class="resultitem">
            <td>
                <img src={movies[1]} height={"100"} ></img></td>
        
            <tr >
                {movies[0]}
            </tr>
            <tr>
                {"Writers: " + movies[2]}
            </tr>
        </table>)
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