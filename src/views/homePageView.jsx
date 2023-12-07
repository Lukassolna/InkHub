const randomWriters = ["w1","w2","w3","w4","w5"]
import "animate.css"


export default
function HomePageView(props){
    function toUserACB(){window.location.hash="#/user"}
    

    function randoWritersCB(writer){

        function writerClickACB(evt){
            props.writerClick(writer)}
            
        return  <div >
                <tr >
                    <img class="writeritem" onClick={writerClickACB} src={"https://thispersondoesnotexist.com/"} alt="Random person" height="300"></img>
                </tr>

                <tr>
                    <td class="center"> {writer}</td>
                </tr>

                <tr>
                    <td class="movie-showcase">
                        <img class="poster" src={"https://thispersondoesnotexist.com/"} alt="Poster 1"  ></img>
                        <img class="poster" src={"https://thispersondoesnotexist.com/"} alt="Poster 1"  ></img>
                        <img class="poster" src={"https://thispersondoesnotexist.com/"} alt="Poster 1"  ></img>

                    </td>
                </tr>

                </div>
                
            }

    function searchText(evt){
        console.log("something changed")
        return props.writeText(evt.target.value)}

    function searchButton(evt){ 
        return props.searchFired()
    }

    function handleKeyPress(evt){
        console.log(evt)
        // look for the `Enter` keyCode
        if (evt.target.keyCode === 13) {
            searchText()
            searchButton()
        }
        searchText()
       
    }
    

    function writersButton(){props.writersSelect()}
    function moviesButton(){props.moviesSelect()}

    
    return ( 
    <div class="centerflex">
        <table>
            <tr>
            {/*<input value={props.text || ""} onChange={searchText} onKeyDown={handleKeyPress}></input>*/}
                <td class="">InkHub</td>
                <img src={"https://www.larpdistribution.com/wp-content/uploads/2020/05/HW-701572BS.png"} height={100} onClick={toUserACB}></img>
                
            </tr>
            
            <tr>
                
            
                <td><input value={props.currentText|| ""} onChange= {searchText}  ></input></td>
                <button onClick= {searchButton}>Search!</button>
            </tr>

            <tr>Browse:
                    <button  disabled= {props.currentOption === 1} class="oval-button" onClick={moviesButton}>Movies</button>
                    <button  disabled= {props.currentOption === 2} class="oval-button" onClick={writersButton}>Writers</button>
                    {/*<button  class="oval-button" onClick={props.onButtonClick}>Directors</button>*/}
                    
            </tr>
            <tr>
                <div class="writerrow">{randomWriters.map(randoWritersCB)}</div>
            </tr>
        </table>
        
        
    </div>
    )
}

