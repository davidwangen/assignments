import React, {useState} from "react";

const UTContext =React.createContext()

function UTContextProvider(props){

    const [uglyThing, setUglyThing]=useState({
        title:"",
        description:"",
        uglyPic:""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setUglyThing((prevUglyThing) => ({
          ...prevUglyThing,
          [name]: value,
        }));
      }


    return(
        <UTContext.Provider value={{
            title:uglyThing.title,
            description:uglyThing.description,
            uglyPic:uglyThing.uglyPic,
            handleChange:handleChange
        }}>
            {props.children}

        </UTContext.Provider>
    )    

}

    

export {UTContextProvider, UTContext,}