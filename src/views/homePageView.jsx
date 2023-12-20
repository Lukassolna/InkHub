
import "animate.css"
import { writerPictures, nameToNumber } from "../writerpictures";



export default
function HomePageView(props){
    
   
    
      
      
    
  

    function randomWritersCB(writer){

        function writerClickACB(evt){
            props.writerClick(writer)
        }
        
          
      
     
        return  <div class ="writer-container" onClick={writerClickACB}>
                <tr >
                    <img class="writeritem"  src={writerPictures[nameToNumber(writer)]} alt="Random person" height="300"></img>
                </tr>

                <tr>
                    <td class="writername">{writer}</td>
                </tr>

                

                </div>
                
            }

    function searchText(evt){
      
        return props.writeText(evt.target.value)}

    function searchButton(evt){ 
        
        
        return props.searchFired()
    }
    

    

    function writersButton(){props.writersSelect()     }
    function moviesButton(){props.moviesSelect()}
    function keyDown(e) {
        if (e.keyCode === 13){
        searchText(e)
          searchButton(e)
        }}

    
    return ( <span class="centerflex" >
        
        <div class="header-container">
    <div class="logo-container">
        <img class="hide-bg mainlogo" src={"https://live.staticflickr.com/65535/53399465685_478bf306bd_b.jpg"} height={400} alt="Logo"></img>
    </div>
    
</div>

        
    <div class="centerflexsmall" >
        
        
        <table  >
        
            
           
    <div class="search-container" >
        <div >
        <input onkeydown={keyDown} class="search-bar"placeholder={"Search..."} type="search" value={props.currentText|| ""} onChange={searchText} ></input>
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

