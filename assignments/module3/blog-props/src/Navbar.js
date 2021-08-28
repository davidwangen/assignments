import React from "react"

function Navbar(){
    const navBar ={
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "1030",
        display: "flex",
        alignItems: "center",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"

    }
    const divContainer ={
        display: "flex",
        flexWrap: "inherit",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginLeft: "auto"
    }
    const navBrand ={
        fontWeight: "800",
        paddingTop: "0.3125rem",
        paddingBottom: "0.3125rem",
        marginRight: "1rem",
        fontSize: "1.25rem",
        whiteSpace: "nowrap",
        color: "#fff"
        
    }
    const list ={
        flexDirection: "row",
        marginLeft: "auto",
        display: "flex",
        paddingLeft: "0",
        marginBottom: "0",
        listStyle: "none",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        paddingInlineStart: "40px"
    }
    const listItem ={
        display: "list-item",
        textAlign: "matchParent"
    }
    const listText ={
        fontSize: "0.75rem",
        fontWeight: "800",
        letterSpacing: "0.0625em",
        textTransform: "uppercase",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        paddingRight: "1rem",
        paddingLeft: "1rem",
        color: "#fff"


    } 
    return(
    <nav style ={navBar}>
        <div style = {divContainer}>
            <a style = {navBrand}>Start Bootstrap</a>               
                <ul style = {list}>
                    <li style = {listItem}>
                        <a style ={listText}>Home</a>
                    </li>
                    <li style = {listItem}>
                        <a style ={listText}>About</a>
                    </li>
                    <li style = {listItem}>
                        <a style ={listText}>Sample Post</a>
                    </li >
                     <li style = {listItem}>
                        <a style ={listText}>Contact</a>
                    </li>
                </ul>
        </div>
    </nav>
    )
}

export default Navbar