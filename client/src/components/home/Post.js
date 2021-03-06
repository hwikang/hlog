import React from 'react';
import 'styles/post.css';
import moment from 'moment';
const Post = ({blog})=>{
    //console.log(blog)
    const fromNow = () =>{
        const postdate = moment(blog.postdate)
        return postdate.fromNow();
    }
    return (
        <div className="col post">
            <div className="content card w-100 bg-dark">
                <div className="card-header">
                    <h5 className="text-white">{blog.category}</h5>
                </div>
                <div className="card-body">
                    <h4 className="card-title text-white">{blog.title} </h4>
                    <h6 className="card-subtitle text-muted">{fromNow()} </h6>
                    {/* <p classNanme="card-text">{blog.description} </p> */}
                </div>
            </div>
        </div>
    )
}

export default Post;