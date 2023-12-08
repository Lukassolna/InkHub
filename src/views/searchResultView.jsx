
export default
function SearchResultView(props){
    function backToHome(){
        window.location.hash="#/"
    }
    function toUserACB(){
        window.location.hash="#/user"}

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
    <div >
         
        <div class="header">
        
            {console.log(props.oldSearch)}
           
        <td><input value= {props.oldSearch} onChange= {searchText}></input></td>
        <td><button onClick= {searchButton}>Search!</button></td>
        <button onClick= {backToHome}>Back to Home</button>
        <p class="alignnow"><img class="alignnow" src={"https://www.larpdistribution.com/wp-content/uploads/2020/05/HW-701572BS.png"} height={100} onClick={toUserACB}></img></p>
        
        
        </div>

        <div >
            {console.log(props.movieResults)}
            {props.movieResults.map(resultsCB)}
        </div>

    </div>
    )
}