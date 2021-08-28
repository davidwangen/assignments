import React from "react"
import BlogPost from "./BlogPost"
import data from "./dataArray"

function BLoglist(){
    const posts = data.map(post => <BlogPost  title = {post.title} subTitle = {post.subTitle} author = {post.author} date = {post.date}/>)
    const postStyleTitle ={
        display: "flex",
        display: "block",
        justifyContent: "center",
        alignItems: "colum",
    }
    const olderPostDiv ={
        marginBottom: "1.5rem",
        justifyContent: "flex-end",
        display: "flex"

    }
    const olderPost = {
        letterSpacing: "0.0625em",
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "#0085A1",
        borderColor: "#0085A1",
        display: "inline-block",
        fontWeight: "800",
        lineHeight: "1.5",
        textAlign: "center",
        verticalAlign: "middle",
        border: "1px solid transparent",
        padding: "1rem 1.75rem",
        fontSize: "0.875rem"

    }
    return (
        <div style ={postStyleTitle}>
            {posts}
            <div style ={olderPostDiv}>
                <a style ={olderPost}>Older Posts</a>
            </div>
        </div>
    )
}

export default BLoglist