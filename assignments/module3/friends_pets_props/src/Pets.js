import React from "react"

function Pets(props){
    return(
        <div>
           <h4>Friends pets name :{props.name}</h4> 
           <h4>Friends pets breed :{props.breed}</h4>
        </div>
    )
}

export default Pets