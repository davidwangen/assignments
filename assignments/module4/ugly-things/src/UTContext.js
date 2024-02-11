import React, {useState} from "react";
import axios from "axios"
import UglyThingItem from "./UglyThingItem";

const UTContext =React.createContext()

function UTContextProvider(props){

    const [uglyThing, setUglyThing]=useState({
        title:"",
        description:"",
        imgUrl:""
    })

    const [ugliesList, setUgliesList]=useState([])
    console.log(ugliesList)

    React.useEffect(function () {
        axios.get("https://api.vschool.io/davidwangen/thing")
         .then((Response) => {
            console.log(Response)
            setUgliesList(Response.data)
    })
    .catch((error) => {
        console.log(error)
        })
    },[])
    
    const list = ugliesList.map((thing, index) => {
        return <UglyThingItem 
                title={thing.title}
                description={thing.title}
                imgUrl={thing.imgUrl}   
        />
    })
    console.log(<UglyThingItem/>)
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUglyThing({
            title:"",
            description:"",
            imgUrl:""
        })
        axios.post("https://api.vschool.io/davidwangen/thing",{
            title:uglyThing.title,
            description:uglyThing.description,
            imgUrl:uglyThing.imgUrl
        })
        .then((Response) => {
            console.log(Response)
        }, (error) => {
            console.log(error)
        })    
    } 

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
            imgUrl:uglyThing.imgUrl,
            ugliesList:ugliesList,
            handleChange:handleChange,
            handleSubmit:handleSubmit,
            list:list
        }}>
            {props.children}

        </UTContext.Provider>
    )    
}

    

export {UTContextProvider, UTContext,}
