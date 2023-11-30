export default
function WritersView(props){

    return ( 
    <div class="debug">
        <table class="center">
            <tr>
                <td class="headers">this is the writerspage</td>

                <td>
                <button  class="oval-button" onClick={props.onButtonClick}>Overveiw</button>
                <button  class="oval-button" onClick={props.onButtonClick}>Movies</button>
                <button  class="oval-button" onClick={props.onButtonClick}>Regular actors</button>
                </td>
            </tr>

            <tr>
                <td>
                <img src={"https://thispersondoesnotexist.com/"} alt="Random person" height="300"></img>
                </td>

                <td>
                <div class="poster-container">
                    <img class="poster" src={"https://thispersondoesnotexist.com/"} alt="Poster 1"  ></img>
                    <img class="poster" src={"https://thispersondoesnotexist.com/"} alt="Poster 2"  ></img>
                    <img class="poster" src={"https://thispersondoesnotexist.com/"} alt="Poster 3"  ></img>
                    <img class="poster" src={"https://thispersondoesnotexist.com/"} alt="Poster 4"  ></img>
                </div>
                </td>
            </tr>
        </table>
    </div>
    )
}