import React, { useContext, useState } from "react";
import {UTContext} from "./UTContext";

function UglyThing(props){
    
    const {title, description, imgUrl, handleSubmit, handleChange} = useContext(UTContext)
      
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    className="title-input"
                    placeholder="Title"
                    value={title}
                    onChange={handleChange}
    
                />
                <input
                    name="imgUrl"
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
        </form>
        <div>
            <h1>{title}</h1>
            <img src={imgUrl} />
            <h1>{description}</h1>
        </div>    
            
    </div>
    )
}



export default UglyThing