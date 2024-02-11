import React, {useContext} from "react";
import { UTContext } from "./UTContext";

function UglyThingItem(props){
    const {title, description, imgUrl,list} = useContext(UTContext)
    return(
        <div>
            <div>
                <h1>{title}</h1>
                <img src={imgUrl}/>
                <h1>{description}</h1>
                {list}
            </div>
        </div>
    )


}

export default UglyThingItem