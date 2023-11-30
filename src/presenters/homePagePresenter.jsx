import HomePageView from "../views/homePageView";

export default
function HomePage(props){
    function chosenWriterACB(writer){
        console.log(writer)
    }
    function updateTextACB(query){console.log(query)/*props.text = props.model.setSearchQuery(query)*/}
    
    return <HomePageView writerClick = {chosenWriterACB} currentText = {updateTextACB}/>;}