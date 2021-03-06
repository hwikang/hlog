import React from 'react';
import Post from './Post'
import { Link } from 'react-router-dom';
class PostComponent extends React.Component {

    render() {
        if (this.props.blogs) {
            const blogs = this.props.blogs
            //console.log(blogs)
            const postList = blogs.map((blog, i) => {
                return (
                    <div key={blog._id}>
                        <Link to={"/post/" + blog._id} className="row" > <Post blog={blog} /> </Link>
                    </div>
                )
            });
            return (
                <div>
                    {postList}
                </div>

            )
        } else {
            return (
                <div>
                    wait a sec...
                </div>
            )
        }

    }
}

export default PostComponent;