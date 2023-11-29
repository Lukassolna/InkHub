const randomWriters = ["w1","w2","w3","w4"]

export default
function HomePageView(props){

    function randoWritersCB(writer){

        function writerClickACB(evt){
            console.log(writer)
            props.writerClick(writer)}

        return  <p class="writeritem" onClick={writerClickACB}>
            {writer} 
        </p>
    }

    return ( 
    <div class="centerflex">
    
            <input>this is the searchbar</input>
 
        <div class="writerrow">{randomWriters.map(randoWritersCB)}</div>
        
        
    </div>
    )
}

