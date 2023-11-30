const randomWriters = ["w1","w2","w3","w4","w5"]

export default
function HomePageView(props){

    function randoWritersCB(writer){

        function writerClickACB(evt){
            props.writerClick(writer)}
            
        return  <div>
                <tr >
                    <img class="writeritem" onClick={writerClickACB} src={"https://thispersondoesnotexist.com/"} alt="Random person" height="300"></img>
                </tr>

                <tr>
                    <td class="center"> {writer}</td>
                </tr>

                <tr>
                    <td class="movie-showcase">
                        <img class="poster" src={"https://thispersondoesnotexist.com/"} alt="Poster 1"  ></img>
                        <img class="poster" src={"https://thispersondoesnotexist.com/"} alt="Poster 1"  ></img>
                        <img class="poster" src={"https://thispersondoesnotexist.com/"} alt="Poster 1"  ></img>

                    </td>
                </tr>

                </div>
                
            }


    function searchText(evt){
        return props.currentText(evt.target.value)}

    return ( 
    <div class="centerflex">
        <table>
            <tr>
                <td>InkHub</td>
            </tr>
            
            <tr>
                <td><input value={props.text|| ""} onChange= {searchText}></input></td>
            </tr>

            <tr>Browse:
                    <button  class="oval-button" onClick={props.onButtonClick}>Writers</button>
                    <button  class="oval-button" onClick={props.onButtonClick}>Directors</button>
                    <button  class="oval-button" onClick={props.onButtonClick}>Movies</button>
            </tr>
            <tr>
                <div class="writerrow">{randomWriters.map(randoWritersCB)}</div>
            </tr>
        </table>
        
        
    </div>
    )
}

