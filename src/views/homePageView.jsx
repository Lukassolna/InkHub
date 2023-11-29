const randomWriters = ["w1","w2","w3","w4"]

export default
function HomePageView(props){

    function randoWritersCB(writer){
        return  <t class="writeritem">
            {writer} 
        </t>
    }

    return ( 
    <div>
        <p>this is the searchbar</p>
        {randomWriters.map(randoWritersCB)}
        
        
    </div>
    )
}

