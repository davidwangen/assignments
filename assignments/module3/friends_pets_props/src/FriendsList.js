import React from "react"
import Friend from "./Friend"
import friends from "./friendListArray"

function FriendsList(){
    const friendComponet = friends.map(people => <Friend name = {people.name} age = {people.age} pets = {people.pets}/>)
    return (
        <div>
            {friendComponet}
        </div>
    )
}



export default FriendsList