import React, { useContext, useState } from "react";
import {UTContext} from "./UTContext";


function UglyThing(props){
    

      const {title, description, handleChange, uglyPic} = useContext(UTContext)
      console.log(uglyPic)

    return (
        <form>
            <input
                name="title"
                type="text"
                className="title-input"
                placeholder="Title"
                value={title}
                onChange={handleChange}
    
            />
            <input
                name="uglyPic"
                type="url"
                className="uglyPic-input"
                placeholder="Enter URL"
                onChange={handleChange}
            />
            <input
                name="description"
                type="text"
                className="description-input"
                placeholder="Description"
                value={description}
                onChange={handleChange}
            />
            <button>Submit</button>
            <h1 >{title} </h1>
            <img src={uglyPic}></img>
            <h1>{description}</h1>
        </form>
    )
}

export default UglyThing