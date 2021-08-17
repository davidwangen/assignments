import React from "react"
import friends from "./friendListArray"
import Pets from "./Pets"



function Friend(props){
    return(
    <div>
        <h3>Friends name :{props.name}</h3>
        <h3>Friends age :{props.age}</h3>
        <h3>{props.pets.map(pet => <Pets name = {pet.name} breed = {pet.breed} />)}</h3>
        <hr />
    </div>
    
    )
}



export default Friend