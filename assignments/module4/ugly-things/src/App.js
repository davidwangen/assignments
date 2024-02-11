import React, {useState} from "react";
import UglyThing from "./UTForm";
import UglyThingItem from "./UglyThingItem";
import {UTContextProvider} from "./UTContext";


function App(props){
  
  return (
    <div>
      <UTContextProvider>
        <UglyThing />
      </UTContextProvider>
    </div>
  )
}

export default App