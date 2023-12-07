export default
function WritersResultView(props){

    function writerDisplayCB(writer){
        return (
            <tr >{writer}</tr>
        )

    }

    return (
        <div>

        <table>{props.writerNames.map(writerDisplayCB)}</table>

        </div>
        )


}
