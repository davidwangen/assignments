import React from "react"
import Navbar from "./Navbar"

function Header(){
    const headerStyle={
        backgroundImage: "url(" + "	https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg" + ")",
        paddingTop: "12.5rem",
        paddingBottom: "12.5rem",
        backgroundPosition: "center",
        backgroundColor: "#6c757d",
        position: "relative",
        marginBottom: "3rem",
        backgroundSize: "cover",
        fontFamily: "sans-serif",
        
    }
    const divContainer = {
        paddingRight: "3rem", 
        paddingLeft: "3rem",
        position: "relative",
        display: "block",
        
    }
    const divText ={
        textAlign: "center",
        color: "#fff",
        fontSize: "3rem",
        
    }
    
    
    return(

        <header style ={headerStyle}> 
            <Navbar />
            <div style ={divContainer}>
                <div style = {divText}>
                    <h1>Clean Blog</h1>
                    <span>A Blog Theme by Starting Bootstrap</span>
                </div>    
           </div>
        </header>
    )
}

export default Header