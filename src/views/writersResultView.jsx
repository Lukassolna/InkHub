export default
function WritersResultView(props){

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

        <table>{props.writerNames.map(writerDisplayCB)}</table>

        </div>
        )


}
