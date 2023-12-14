export default
function UserView(props){
    function backToHome(){
        window.location.hash="#/"
    }


    function mappinCB(movies){
        function reMovieACB(){
            props.removeMovie(movies.data.imdbID)
        }
        function clickMovieACB(){
            props.movieClicked(movies.imdbID)
        }

        if (movies.data){
    
        
        return (
    
        <table  >

            <td >
            
            <img onClick={clickMovieACB} src={movies.data.Poster} height={100}></img>
                {movies.data.Title}
                
                
            
             <img class="alignnow" src={"https://www.gmbinder.com/images/wNyM2LV.png"} height="30" onClick={reMovieACB}> </img>
            </td>
        </table>)
    }}

    function mapWritersCB(writer){
        function reWriterACB(){
            props.removeWriter(writer)
        }
        return(
        <tr>
            
            {writer}
            <img class="alignnow" src={"https://www.gmbinder.com/images/wNyM2LV.png"} height="30" onClick={reWriterACB}> </img>

        
        </tr>
    )}
       

  
    return ( 
    <div>
        <button onClick= {backToHome}>Back to Home</button>
        <table >
            <tr >
                <th class="debug">Favorite Movies:</th>
                <th class="debug"> Favorite Writers:</th>
            </tr>
            <tr>
                <td >{props.hey.map(mappinCB)}</td>
                <td>{props.favouriteWriters.map(mapWritersCB)}</td>
            </tr>
        </table>

        
    </div>
    )
}

