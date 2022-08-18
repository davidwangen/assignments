import React from "react"

function ListItem(props){
    return (
        <div className="list-item">
            <input type={"checkbox"} />
            <p>{props.person.name}</p>
            <img src={props.person.image}/>
        </div>    
    )
}

export default ListItem