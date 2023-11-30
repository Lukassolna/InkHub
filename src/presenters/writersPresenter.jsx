import WritersView from "../views/writersView";

import movieModel from "../movieModel";

export default
function Writers(props){

   
        const fetchData = () => {
            props.model.getData() 
        };

    return <WritersView  onButtonClick={fetchData}/>;
}

    
    
       
    