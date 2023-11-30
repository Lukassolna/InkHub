const randomWriters = ["w1","w2","w3","w4"]

export default
function HomePageView(props){

    function randoWritersCB(writer){

        function writerClickACB(evt){
            props.writerClick(writer)}
            
        return  <p class="writeritem" onClick={writerClickACB}>
            {writer} 
        </p>}

    function searchText(evt){
        return props.currentText(evt.target.value)}

    return ( 
    <div class="centerflex">
    
            <input value={props.text|| ""} onChange= {searchText}></input>
 
        <div class="writerrow">{randomWriters.map(randoWritersCB)}</div>
        
        
    </div>
    )
}

