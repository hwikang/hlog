import React from 'react';
import Post from './Post'
class PostComponent extends React.Component {
    state = {
        blogs: ''
        
    }
    componentDidMount(){
       
        this.setState({
            blogs:this.props.blogs
        })
        
    }
    render() {
       
       if(this.props.blogs){
        const blogs = this.props.blogs
        console.log(blogs)
        const postList = blogs.map((blog,i)=>{
            return (    
                <div key={blog._id}> 
                    <a href={"/post/"+blog._id}  className="row" > <Post blog={blog}/> </a>
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