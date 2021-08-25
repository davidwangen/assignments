import React from "react"
import BlogPost from "./BlogPost"
import data from "./dataArray"

function BLoglist(){
    const posts = data.map(post => <BlogPost  title = {post.title} subtitle = {post.subtitle} author = {post.author} date = {post.date}/>)
    return (
        <div>
            {posts}
        </div>
    )
}

export default BLoglist