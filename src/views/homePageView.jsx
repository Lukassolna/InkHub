
import "animate.css"
import { writerPictures } from "../writerpictures";



export default
function HomePageView(props){
    function toUserACB(){
        window.location.hash="#/user"}
    

    function randomWritersCB(writer){

        function writerClickACB(evt){
            props.writerClick(writer)
        }
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
            
        return  <div >
                <tr >
                    <img class="writeritem" onClick={writerClickACB} src={writerPictures[getRandomInt(24)]} alt="Random person" height="300"></img>
                </tr>

                <tr>
                    <td class="center">{writer}</td>
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
    function keyDown(e) {
        if (e.keyCode === 13){
            searchText(e)
        
            console.log("Enter Pressed"+e.keyCode)

          searchButton()
        }}

    
    return ( <span>
        <div title="star" class="aligndownright"><img class="hide-bg alignnow" src={"https://live.staticflickr.com/65535/53395218564_714090c10a_b.jpg"} height={200} onClick={toUserACB}></img></div>
            
              
        
    <div class="centerflexsmall" >
        <td  ><img class="hide-bg mainlogo" src={"https://live.staticflickr.com/65535/53395405340_3ebebbe332_b.jpg"} height={200}></img></td>
        
        <table  >
        
            
           
    <div class="search-container">
        <input placeholder={"Search"} type="search" value={props.currentText|| ""} onChange={searchText} onKeyDown={keyDown}></input>
        <button onClick={searchButton}>Search!</button>
    </div>

                
            

            <tr>Browse:
                    <button  disabled= {props.currentOption === 1} class="oval-button" onClick={moviesButton}>Movies</button>
                    <button  disabled= {props.currentOption === 2} class="oval-button" onClick={writersButton}>Writers</button>
                    {/*<button  class="oval-button" onClick={props.onButtonClick}>Directors</button>*/}
                    
            </tr>
            <tr>
                <div class="writerrow">{props.randomWriters.map(randomWritersCB)}</div>
            </tr>
        </table>
        
        
    </div>
    </span>
    )
}

