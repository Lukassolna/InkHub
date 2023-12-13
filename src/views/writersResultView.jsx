import { writerPictures } from "../writerpictures";
export default
function WritersResultView(props){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    function back2home(){
        return window.location.hash="#/"}

    function writerDisplayCB(writer){

        function writerResultClickACB(evt){
            props.writerClick(writer)
        }
        return (
            <div onClick={writerResultClickACB}>
            <img class="writeritem" src={writerPictures[getRandomInt(24)]} alt="Poster 1"   ></img>
            <tr >{writer}</tr>
            </div>
        )
    }
    
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

    return (
        <div>
             <div class="header">
      <input class="search-bar"value= {props.oldSearch} onChange= {searchText} onkeydown={keyDown}></input>
      <button class="search-button"onClick= {searchButton}>Search!</button>
        <button class="search-button" onClick={back2home}>Back to Home</button>

        </div>
        <table>{props.writerNames.map(writerDisplayCB)}</table>

        </div>
        )


}
