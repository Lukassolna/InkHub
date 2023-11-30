export default
function WritersView(props){

    return ( 
    <div class="debug">
        <tr>this is the writerspage
            <button  onClick={props.onButtonClick}>i like slurping on some OJ</button>
            <button  onClick={props.onButtonClick}>i like slurping on some OJ</button>
            <button  onClick={props.onButtonClick}>i like slurping on some OJ</button>
        </tr>

        <tr>
            <img src={"https://thispersondoesnotexist.com/"} alt="Random person" height="300"></img>
        </tr>
    </div>
    )
}