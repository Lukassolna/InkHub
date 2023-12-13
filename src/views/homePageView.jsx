
import "animate.css"
import { writerPictures } from "../writerpictures";



export default
function HomePageView(props){
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      let  x =[]
    
    function toUserACB(){
        window.location.hash="#/user"}
    

    function randomWritersCB(writer){

        function writerClickACB(evt){
            props.writerClick(writer)
        }
        
          
      
        function fiveDiffNumb(num){
            num = getRandomInt(24)
            while (x.includes(num)){num= getRandomInt(24)
            }
            x = [...x, num]

            return num
        }
            
        return  <div >
                <tr >
                    <img class="writeritem" onClick={writerClickACB} src={writerPictures[fiveDiffNumb(x)]} alt="Random person" height="300"></img>
                </tr>

                <tr>
                    <td class="center">{writer}</td>
                </tr>

                

                </div>
                
            }

    function searchText(evt){
        console.log("something changed")
        return props.writeText(evt.target.value)}

    function searchButton(evt){ 
        return props.searchFired()
    }

    

    function writersButton(){props.writersSelect()}
    function moviesButton(){props.moviesSelect()}
    function keyDown(e) {
        if (e.keyCode === 13){
            searchText(e)
        
            console.log("Enter Pressed"+e.keyCode)

          searchButton()
        }}

    
    return ( <span class="centerflex" >
        <div class="header-container">
    <div class="logo-container">
        <img class="hide-bg mainlogo" src={"https://live.staticflickr.com/65535/53395405340_3ebebbe332_b.jpg"} height={400} alt="Logo"></img>
    </div>
    <div class="star-container">
        <img class="hide-bg aligndownright" src={"https://live.staticflickr.com/65535/53395218564_714090c10a_b.jpg"} height={200} onClick={toUserACB} alt="Star"></img>
    </div>
</div>

        
    <div class="centerflexsmall" >
        
        
        <table onKeyDown={keyDown} >
        
            
           
    <div class="search-container">
        <div>
        <input class="search-bar"placeholder={"Search"} type="search" value={props.currentText|| ""} onChange={searchText} onKeyDown={keyDown}></input>
        <button class="search-button" onClick={searchButton}>Search!</button>
        </div>
        <div>
        <button  disabled= {props.currentOption === 1} class="oval-button" onClick={moviesButton}>Movies</button>
                    <button  disabled= {props.currentOption === 2} class="oval-button" onClick={writersButton}>Writers</button>
        </div>
    </div>

                
            

            
            <tr>
                <div class="writerrow">{props.randomWriters.map(randomWritersCB)}</div>
            </tr>
        </table>
        
        
    </div>
    </span>
    )
}

