export default
function WritersResultView(props){

    function writerDisplayCB(writer){
        return (
            <div>
            <tr >writers</tr>

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
