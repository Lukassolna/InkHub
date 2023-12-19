
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

        function keyDown(e) {
            if (e.keyCode === 13){
                searchText(e)
            
                console.log("Enter Pressed"+e.keyCode)
    
              searchButton()
            }}

    function resultsCB(movies){

        function resultClickACB(evt){
            props.movieClick(movies[3])
            window.location.hash="#/movie"
        }

        return (
        <table onClick={resultClickACB} class="topalign">
            <td>
                <img src={movies[1]} height={"100"} ></img></td>
            <td>
                <table >
                    <tr class="titletext" >{movies[0]}</tr>
                    <tr class="writertext">   {"Writers: " + movies[2]}</tr>
                </table>
            </td>
        </table>)
        }


    

    return ( 
    <div class="">
         
        <div class="header">
        
            {console.log(props.oldSearch)}
           
        <input placeholder="Search..."class="search-bar"value= {props.oldSearch} onChange= {searchText} onkeydown={keyDown}></input>
        <button class="search-button" onClick= {searchButton}>Search!</button>
        <button class="search-button"onClick= {backToHome}>Back to Home</button>
       
        
        
        
        </div>
       

        <div >
            {console.log(props.movieResults)}
            {props.movieResults.map(resultsCB)}
        </div>

    </div>
    )
}