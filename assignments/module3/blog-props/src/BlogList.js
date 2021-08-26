import React from "react"
import BlogPost from "./BlogPost"
import data from "./dataArray"

function BLoglist(){
    const posts = data.map(post => <BlogPost  title = {post.title} subTitle = {post.subTitle} author = {post.author} date = {post.date}/>)
    return (
        <div>
            {posts}
            <div>
                <a>Older Posts</a>
            </div>
        </div>
    )
}

export default BLoglist