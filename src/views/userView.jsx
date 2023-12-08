export default
function UserView(props){
    function backToHome(){
        window.location.hash="#/"
    }


    function mappinCB(movies){
        function removeACB(){
            props.removeMovie(movies.data.imdbID)
        }
        if (movies.data){
    
        
        return (
            <div>
        <table >

            <td>
            
            <img src={movies.data.Poster} height={100}></img>
                {movies.data.Title}
                
                
            
             <img class="alignnow" src={"https://www.gmbinder.com/images/wNyM2LV.png"} height="30" onClick={removeACB}> </img>
            </td>
        </table>
        </div>)
    }}
       

  
    return ( 
    <div>
        <button onClick= {backToHome}>Back to Home</button>
        <td>Favorite Movies:</td>
        <tr>{props.hey.map(mappinCB)}</tr>
        
    </div>
    )
}

