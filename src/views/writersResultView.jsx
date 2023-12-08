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

    return (
        <div>
        <button onClick={back2home}>Back to Home</button>
        <table>{props.writerNames.map(writerDisplayCB)}</table>

        </div>
        )


}
