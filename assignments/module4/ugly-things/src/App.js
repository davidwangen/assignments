import React, {useState} from "react";
import UglyThing from "./UTForm";
import UglyThingList from "./UTList";
import {UTContextProvider} from "./UTContext";


function App(props){
  return (
    <div>
      <UTContextProvider>
        <UglyThing />
        <UglyThingList />
      </UTContextProvider>
    </div>
  )
}

export default App