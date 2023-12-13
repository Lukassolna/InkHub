export default
function WritersResultView(props){

    function back2home(){
        return window.location.hash="#/"}

    function writerDisplayCB(writer){

        function writerResultClickACB(evt){
            props.writerClick(writer)
        }
        return (
            <div onClick={writerResultClickACB}>
            <img class="writeritem" src={"./images/profile_placeholder.jpeg"} alt="Poster 1"   ></img>
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
        <td><input value= {props.oldSearch} onChange= {searchText} onkeydown={keyDown}></input></td>
        <td><button onClick= {searchButton}>Search!</button></td>
        <button onClick={back2home}>Back to Home</button>
        <table>{props.writerNames.map(writerDisplayCB)}</table>

        </div>
        )


}
