import React from "react"


function BlogPost(props){
    const textStyle = {
        marginTop: "3rem",
        marginBottom: "3rem",
        marginLeft: "25rem",
        marginRight: "0rem"
    }
    const divBody = {
        paddingRight: "3rem",
        paddingLeft: "3rem"
    }
    return(
        <div>
            <h1 style ={textStyle}>{props.title}</h1>
            <h2 style = {textStyle}>{props.subTitle}</h2>
            <h3 style ={textStyle}>Posted by {props.author} on {props.date}</h3>
            <hr/>
        </div>
    )
}


export default BlogPost
