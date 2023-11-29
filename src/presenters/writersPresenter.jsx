import WritersView from "../views/writersView";

export default
function Writers(props){

   
        const fetchData = () => {
            props.model.getData() 
        };

    return <WritersView  onButtonClick={fetchData}/>;
}

    
    
       
    