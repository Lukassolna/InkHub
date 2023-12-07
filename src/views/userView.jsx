export default
function UserView(props){
    function backToHome(){
        window.location.hash="#/"
    }
    function mappinCB(movies){
        if (movies.data !== null){
        console.log(movies)
        
        return (
        <table >
            <tr >
            <img src={movies.data.Poster} height={100}></img>
                {movies.data.Title}
                
            </tr>
            
        </table>)
    }}
       

  
    return ( 
    <div>
        <button onClick= {backToHome}>Back to Home</button>
        <td>Favorite Movies:</td>
        
    
        <tr>{props.hey.map(mappinCB)}</tr>
        
    </div>
    )
}

