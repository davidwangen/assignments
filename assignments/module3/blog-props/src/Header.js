import React from "react"
import Navbar from "./Navbar"

function Header(){
    return(
        <div>
           <header></header> 
           <div>
               <Navbar />
               <h1>Clean Blog</h1>
               <span>A Blog Theme by Starting Bootstrap</span>
           </div>
        </div>
    )
}

export default Header