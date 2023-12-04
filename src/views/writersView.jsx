import "animate.css"

export default
function WritersView(props){

    return ( 
    <div>
        <tr class = "animate__animated animate__bounce" >this is the writerspage</tr>
        <button  onClick={props.onButtonClick}>i like slurping on some OJ</button>
    </div>
    )
}